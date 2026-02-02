import { user } from "./types"


export type ModalContextType = {
    openModal: ()=> void
    closeModal: ()=> void
    
}
export type meContextType = {
    getMe: ()=> void
    me: user
    setMe: (res: user)=> void
}