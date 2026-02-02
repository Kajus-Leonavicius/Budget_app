

export type Transactions = {
    date: Date
    description: string
    type: string
    category: string
    amount: number
    id: number 
}

export type Details = {
    date: string
    description: string
    type: string
    category: string
    amount: number
}

export type user = {
    id?: number
    name?: string
    surname?: string
    email?: string
    balance?: number
    savings?: number
    monthlyIncome?: number 
    monthlyExpenses?: number
}