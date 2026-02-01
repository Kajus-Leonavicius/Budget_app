'use client'
//faio pavaidinimas netinka cia register :D 
import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import axios from 'axios'
import { LoginFormProps } from '@/@types/PropsTypes'

export default function LoginForm({setLogin}: LoginFormProps) {
    const[user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const handleSubmit = async() =>{
        try{
            const res = await axios.post(process.env.NEXT_PUBLIC_AUTH_API_URL + `/register`, {
                name: user.name,
                surname: user.surname,
                email: user.email,
                password: user.password
            })
            
            console.log(res.data, res.status)
            // jeigu okey su registracija renderinam login form
            if(res.data.message !== 'all fields must be filled'){
                console.log("reg is guud rendering login...")
                setLogin(true)
            }

        }catch(e){
            console.error(e)
        }
    }
  return (
    <div className='border border-gray-200 p-4 rounded-xl'>
        <div className='flex flex-col mb-4'>
            <label htmlFor="">Name</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="text" 
                placeholder='Your Name'
                onChange={(e) => setUser({...user, name: e.target.value})}
            />
        </div>
        <div className='flex flex-col mb-4'>
            <label htmlFor="">Surname</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="text" 
                placeholder='Your Surname'
                onChange={(e) => setUser({...user, surname: e.target.value})}     
            />
        </div>
        <div className='flex flex-col mb-4'>
            <label htmlFor="">Email</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="email" 
                placeholder='Your Email'
                onChange={(e) => setUser({...user, email: e.target.value})}      
            />
        </div>
        <div className='flex flex-col mb-4'>
            <label htmlFor="">Password</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="password" 
                placeholder='Your Password'
                onChange={(e) => setUser({...user, password: e.target.value})}      
            />
        </div>
        <PrimaryButton
            title='Register your account'
            onClick={handleSubmit}
        />
    </div>
  )
}
