import React from 'react'
import { useMe } from './MeContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function User() {
    const {me} = useMe()
  return (
    <div className='flex items-center gap-2'>
      <div>
        <AccountCircleIcon fontSize='large'/>
      </div>
      <div>
        <div className='flex gap-1 font-bold'>
            <p>{me.name}</p>
            <p>{me.surname}</p><br/>
        </div>
        <p className='text-sm'>{me.email}</p>
      </div>
    </div>
  )
}

export default User
