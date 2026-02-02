import express from 'express'
import {prisma} from "../../lib/prisma.js"
import type { Request, Response } from 'express'
import type {user, AuthRequest } from '../controllers/authCcontroller.js'

const calcMonthlyIncome = async (userId: number) =>{
    const currentMonth = new Date()
    const firstMonthDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastMonthday = new Date(currentMonth.getFullYear(), currentMonth.getMonth()+ 1, 0)

    const income = await prisma.transactions.aggregate({
        where: {
            userId: userId,
            type: 'income',
            date:{
                gte: firstMonthDay,
                lt: lastMonthday
            }
        },
        _sum:{
            amount: true
        }
    })

    return income._sum.amount || 0
}

const calcMonthlyExpenses = async (userId: number) =>{
    const currentMonth = new Date()
    const firstMonthDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastMonthday = new Date(currentMonth.getFullYear(), currentMonth.getMonth()+ 1, 0)

    const income = await prisma.transactions.aggregate({
        where: {
            userId: userId,
            type: 'expenses',
            date:{
                gte: firstMonthDay,
                lt: lastMonthday
            }
        },
        _sum:{
            amount: true
        }
    })

    return income._sum.amount || 0
}


export const me = async (req: AuthRequest, res: Response)=>{
   try{
        const [monthlyIncome, monthlyExpenses] = await Promise.all([
            calcMonthlyIncome(Number(req.user?.id)),
            calcMonthlyExpenses(Number(req.user?.id))
        ])
        res.json({
            ...req.user,
            monthlyIncome,
            monthlyExpenses,
        })
   }catch(e){
    console.log(e)
   }
}