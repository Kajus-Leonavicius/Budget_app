import React from 'react'
import User from './User'

function TopNavBar() {
  return (
    <div className='p-4 border-b border-gray-200 flex justify-between'>
        <div>
            labas
        </div>
        <div className='w-auto'>
            <User/>
        </div>
    </div>
  )
}

export default TopNavBar
