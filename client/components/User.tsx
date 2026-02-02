import React from 'react'
import { useMe } from './MeContext'

function User() {
    const {me} = useMe()
  return (
    <div>
        <div className='flex gap-1 font-bold'>
            <p>{me.name}</p>
            <p>{me.surname}</p><br/>
        </div>
        <p className='text-sm'>{me.email}</p>
    </div>
  )
}

export default User
