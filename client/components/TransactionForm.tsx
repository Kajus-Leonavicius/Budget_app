'use client'
import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { Details } from '@/@types/types'
import axios from 'axios'
import { useModal } from './Modal'
import { useTransactions } from './TransactionContext'
import 'dotenv/config'

function TransactionForm() {
  const {closeModal} = useModal()
  const {refreshTransactions} = useTransactions()

  const [details, setDetails] = useState<Details>({
    date: '',
    amount: 0,
    type: '',
    description: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    const {name, value} = e.target

    setDetails(values => ({...values, [name]: value}))
  }

  const addTransaction = async () =>{
    try{
        await axios.post(process.env.NEXT_PUBLIC_TRANSACTION_API_URL!,{
        date: new Date(details.date),
        description: details.description,
        category: details.category,
        type: details.type,
        amount: details.amount
      },{
        withCredentials: true
      })
      closeModal()
      refreshTransactions()
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="">Date</label>
        <input 
          className='border border-gray-200 rounded-xl p-1' 
          type="date" 
          value={details.date}
          name='date'
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="">Description</label>
        <input 
          className='border border-gray-200 rounded-xl p-1' 
          type="text" 
          value={details.description}
          name='description'
          onChange={handleChange}  
        />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="">Category</label>
        <input 
          className='border border-gray-200 rounded-xl p-1' 
          type="text" 
          value={details.category}
          name='category'
          onChange={handleChange}  
        />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="">Type</label>
        <select 
          className='border border-gray-200 rounded-xl p-1' 
          name="type" 
          value={details.type}
          onChange={handleChange}
          >
            <option>Select type:</option>
            <option value="Savings">Savings</option>
            <option value="Expenses">Expenses</option>
            <option value="Income">Income</option>
        </select>
      </div>
      <div className='flex flex-col mt-4 mb-4'>
        <label htmlFor="">Ammount</label>
        <input 
          className='border border-gray-200 rounded-xl p-1' 
          type="number" 
          value={details.amount}
          name = 'amount'
          onChange={handleChange}
        />
      </div>
      <PrimaryButton
        title={'Save Transaction'}
        onClick={addTransaction}
      />
    </div>
  )
}

export default TransactionForm
