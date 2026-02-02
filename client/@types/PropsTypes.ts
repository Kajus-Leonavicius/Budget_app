import { Transactions } from "./types"


export type buttonProps = {
    title: string
    onClick: ()=>void
}

export type WidgetProps = {
    title: string
    data?: number
    info?: string | null
}

export type LoginFormProps = {
    setLogin: (isLogged: boolean) => void
}

export type TransactionsProps = {
    transactions: Transactions[]
}

export type TransactionsContextType = {
  transactions: Transactions[]
  addTransaction: (t: Transactions) => void
  refreshTransactions: () => void
  deleteTransaction: (id: number) => void
}