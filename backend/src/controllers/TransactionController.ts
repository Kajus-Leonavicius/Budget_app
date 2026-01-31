import express from 'express'
import {prisma} from "../../lib/prisma.js"
import type { Request, Response } from 'express'
import type {user, AuthRequest } from '../controllers/authCcontroller.js'

export const getTransactions = async(req: AuthRequest, res: Response) =>{
    try{
        const id = req.user?.id

        if(!id){
            return res.status(401).json({message: 'Unauthorized'})
        }

        const transactions = await prisma.transactions.findMany({
            where:{
                userId: Number(id)
            }
        })

        return res.status(200).json(transactions)
    }catch(e){
        console.log(e)
    }
}

export const postTransactions = async(req: AuthRequest, res: Response) => {
    try{
        const {description, date, amount, category, type} = req.body
        const id = req.user?.id

        const newTransaction = await prisma.transactions.create({
            data:{
                description: description,
                date: date,
                amount: Number(amount),
                category: category,
                type: type,
                userId: id
            }
        })

        return res.status(201).json({message: 'transaction created'})
    }catch (e){
        console.log(e)
    }
}

export const deleteTransaction = async(req: Request, res: Response) => {
    try{
        const {id} = req.params

        const deleted = await prisma.transactions.delete({
            where:{
                id: Number(id)
            }
        })

        return res.status(200).json({message: 'deleted'})
    }catch (e){
        console.log(e)
    }
}