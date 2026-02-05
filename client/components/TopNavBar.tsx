import React from 'react'
import User from './User'
import { useMe } from './MeContext'
import {useRouter} from 'next/navigation'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';

function TopNavBar() {
  const {me} = useMe()
  const router = useRouter()

  return (
    <div className='p-4 flex flex-col lg:flex-row lg: justify-between'>
        <div>
            <p className='font-bold text-xl lg:text-3xl'>Welcome back, {me.name}</p>
        </div>
        <div>
          <ul className='flex gap-3 cursor-pointer items-center align-middle'>
            <li onClick={() => router.push('/transactions')}><AccountBalanceIcon/>Transactions</li>
            <li onClick={() => router.push('/dashboard')}><DashboardIcon/>Dashboard</li>
          </ul>
        </div>
        <div className='w-auto '>
            <User/>
        </div>
    </div>
  )
}

export default TopNavBar
