import { WidgetProps } from '@/@types/PropsTypes'
import React from 'react'

function Widget({title, data, info}: WidgetProps) {
  return (
    <div className='border border-gray-200 rounded-xl p-4 flex flex-col'>
       <p className='text-1xl lg:text-3xl font-extrabold'>{title}</p>
       <p className='text-lg lg:text-2xl font-semibold'>{data}</p>
       <p className='text-sm'>{info} </p>
    </div>
  )
}

export default Widget
