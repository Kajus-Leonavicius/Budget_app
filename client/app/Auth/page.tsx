'use client'
import LoginForm from '@/components/LoginForm'
import Register from '@/components/Register'
import React, { useState } from 'react'

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [login, setLogin] = useState(false)
  return (
    <div className='flex justify-center h-screen items-center align-middle flex-col'>
      {login === true? (
        <Register/>
      ): (
        <LoginForm
        setLogin={setLogin}
      />
      )}
      {login === true? (
        <div className='flex flex-col items-center'>
          <p>Not registered yet? create an account?</p>
          <p>
              <button 
                  className='text-[#b185db] border-b border-[#b185db]'
                  onClick={()=>setLogin(false)}
              >
                      Register
              </button>
          </p>
      </div>
      ):(
         <div className='flex flex-col items-center'>
          <p>Already have an account?</p>
          <p>
              <button 
                  className='text-[#b185db] border-b border-[#b185db]'
                  onClick={()=>setLogin(true)}
              >
                      Login
              </button>
          </p>
      </div>
      )}
    </div>
  )
}

export default page
