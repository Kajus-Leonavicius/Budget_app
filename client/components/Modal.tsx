'use client'
import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import {createContext, useState, useContext} from 'react'
import { ModalContextType } from '@/@types/ContextTypes'
import TransactionForm from './TransactionForm'

//creating context
const ModalContext = createContext<ModalContextType | undefined>(undefined)

//custom hook 
export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within ModalProvider')
  }
  return context
}


function Modal({children}: {children: React.ReactNode}) {
    //context state
    const [open, setModalOpen] = useState(false)

    //context functions
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

  return (
    <ModalContext.Provider
        value={{openModal, closeModal}}
    >
        {children}
        <Dialog
            open={open}
            onClose={closeModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                <p className='text-3xl font-extrabold'>New transaction</p>
            </DialogTitle>
            <DialogContent>
                <TransactionForm/>
            </DialogContent>
        </Dialog>
    </ModalContext.Provider>
  )
}

export default Modal
