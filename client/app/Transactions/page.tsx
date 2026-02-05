'use client'
import React from 'react'
import ToolBar from '@/components/ToolBar'
import TransactionsTable from '@/components/TransactionsTable'
import { useTransactions } from '@/components/TransactionContext'
import TopNavBar from '@/components/TopNavBar'

function Page() {
    const {transactions} = useTransactions()
  return (
    <div>
        <TopNavBar/>
        <ToolBar/>
            <TransactionsTable
                transactions={transactions}
            />
    </div>
  )
}

export default Page
