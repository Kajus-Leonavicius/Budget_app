'use client'
import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import axios from 'axios'
import { meContextType } from '@/@types/ContextTypes'
import { user } from '@/@types/types'

const meContext = createContext<meContextType | undefined>(undefined)

export const useMe = () =>{
    const ctx = useContext(meContext)
    if(!ctx) throw new Error('useTransactions must be used inside provider')
    return ctx
}

function MeContext({children}: {children: React.ReactNode}) {
    const [me, setMe] = useState<user>({})

    const getMe = async () =>{
        try{
            const res = await axios.get(process.env.NEXT_PUBLIC_ME_API_URL!,{withCredentials: true})

            setMe(res.data)
        }catch(e){
            console.log(e)
        }
    }

useEffect(()=>{
    getMe()
    console.log(`logas is useeffect meContex: /n ${me}`)
},[])
  return (
    <meContext.Provider
        value={{getMe, me, setMe}}
    >
      {children}
    </meContext.Provider>
  )
}

export default MeContext
