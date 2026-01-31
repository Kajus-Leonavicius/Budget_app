'use client'
import PrimaryButton from './PrimaryButton'
import { useModal } from './Modal'

function ToolBar() {
  const {openModal} = useModal()

  return (
    <div className='p-4 mb-2 border-b border-gray-200 flex justify-end'>
        <div className='flex items-center text-center gap-2'>
            <PrimaryButton
              title='New Transaction'
              onClick={openModal}
            />
        </div>
    </div>
  )
}

export default ToolBar
