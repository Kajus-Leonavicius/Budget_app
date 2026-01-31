import { buttonProps } from '@/@types/PropsTypes'
import React from 'react'

function PrimaryButton({title, onClick}: buttonProps) {
  return (
    <button
        className='bg-[#b185db] p-2 rounded-xl text-white'
        onClick={()=> onClick()}
    >
        {title}
    </button>
  ) 
}

export default PrimaryButton
