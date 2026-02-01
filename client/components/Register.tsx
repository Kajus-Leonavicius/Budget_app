'use client'
import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function Register() {
    const router = useRouter()

    const [user, setUser] = useState({
    email: '',
    password: ''
})

const handleLogin = async() =>{
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_AUTH_API_URL + '/login', {
            email: user.email,
            password: user.password
        },{
            withCredentials: true
        })

        if(res.status === 200){
            router.push('/Transactions')
        }
    }catch(e){
        console.log(e)
    }
}
  return (
    <div className='border border-gray-200 p-4 rounded-xl flex  flex-col justify-center'>
      <div className='flex flex-col mb-4'>
            <label htmlFor="">Email</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="email" 
                placeholder='Your Name'
                onChange={(e) => setUser({...user, email: e.target.value})}
            />
        </div>
      <div className='flex flex-col mb-4'>
            <label htmlFor="">Password</label>
            <input
                className='border border-gray-200 rounded-xl p-1'
                type="password" 
                placeholder='Your Name'
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
        </div>
      <PrimaryButton
        title='Login'
        onClick={handleLogin}
      />
    </div>
  )
}

export default Register
