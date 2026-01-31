import express from 'express'
import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from "../../lib/prisma.js";
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser';

//move types and interfaces to separate file
export type user = {
    id: number
    name: string,
    surname: string
    email: string
}
export interface AuthRequest extends Request {
    user?: user
}

//middleware function to chech if auth token is valid
export const authToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    //get authHeader
    //const authHeader = req.headers['authorization']
    

    //kandagi naudoju dabar http cookies nes tai gera praktika ir verta psimokinti reikia kitaip gauti tokena
    const token = req.cookies?.token

    //splits token by the space and writes second element 
    //const token = authHeader?.split(' ')[1]

    //chech if authToken exists
    if(!token){
        console.log('Token nt found')
        //prideti gal return dar su 401
    }

    try{
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        //! means token will be 100% string
        const decodedToken = jwt.verify(token!, process.env.JWT_SECRET) as any

        req.user = {
            id: decodedToken.id,
            name: decodedToken.name,
            surname: decodedToken.surname,
            email: decodedToken.email
        }

        console.log(req.user)
        next()
    }catch(e){
        console.log('Token is bad or expired');
        return res.status(403).json({ message: 'Bad token' });
    }
}

export const register = async (req: Request, res: Response) =>{
    try{
        const {name, surname, email, password} = req.body

        if(!name || !surname || !email || !password){
            return res.json({'message': 'all fields must be filled'})
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser =  await prisma.users.create({
            data:{
                name: name,
                surname: surname,
                email: email,
                password: hashedPass
            }
        })

        return res.json({'message': 'Succesfully registered'})
    }catch(e){
        console.log(e)
    }
}

export const login = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(401).json({'message': 'all fields must be filled'})
        }

        const user = await prisma.users.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            return res.status(404).json({'message': 'no user found with this email. Please check email and try again'})
        }

        const validPass = await bcrypt.compare(password, user.password)
        if(!validPass){
            return res.status(401).json({'message': 'Incorrect password'})
        }

        //jwt tekon creation
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email
        },
            process.env.JWT_SECRET!,
            {expiresIn: '24h'}
        )

        res.cookie('token', token,{
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 60*60*1000
        })

        res.json({
            'message': 'logedIn',
        })
    }catch (e){
        console.log(e)
    }
}

export const logout = async(req: Request ,res: Response) => {
    res.clearCookie('token',{
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    })

    res.json({message: 'Logged out'})
}