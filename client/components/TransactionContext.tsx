'use client'
import { TransactionsContextType } from '@/@types/PropsTypes'
import { Transactions } from '@/@types/types'
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import 'dotenv/config'
import { useMe } from './MeContext'

const transactionContext = createContext<TransactionsContextType | undefined>(undefined)

export const useTransactions = () => {
  const ctx = useContext(transactionContext)
  if (!ctx) throw new Error('useTransactions must be used inside provider')
  return ctx
}

function TransactionContext({children}: {children: React.ReactNode}) {
    const [transactions, setTransactions] = useState<Transactions[]>([])
    const {setMe} = useMe()

    const refreshTransactions= async () =>{
        const res = await axios.get(process.env.NEXT_PUBLIC_TRANSACTION_API_URL!, {
            withCredentials: true
        })
        setTransactions(res.data)

        const me = await axios.get(process.env.NEXT_PUBLIC_ME_API_URL!, {withCredentials: true})
        setMe(me.data)
    }

    const addTransaction = (transacion: Transactions) => {
        setTransactions(prev => [...prev, transacion])
    }

    const deleteTransaction = async (id: number) =>{
        try{
            await axios.delete(process.env.NEXT_PUBLIC_TRANSACTION_API_URL + `/${id}`,{withCredentials: true})

            await refreshTransactions()
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        refreshTransactions()
    },[])
  return (
    <transactionContext.Provider
        value={{transactions, addTransaction, refreshTransactions, deleteTransaction}}
    >
        {children}
    </transactionContext.Provider>
  )
}

export default TransactionContext
