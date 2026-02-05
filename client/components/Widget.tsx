import { WidgetProps } from '@/@types/PropsTypes'
import React from 'react'

function Widget({title, data, children}: WidgetProps) {
  return (
    <div className='border border-gray-200 rounded-xl shadow-md'>
      <div className='p-4 flex flex-col'>
        <p className='text-1xl lg:text-3xl font-extrabold'>{title}</p>
        <p className='text-lg lg:text-2xl font-semibold'>{data}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Widget
