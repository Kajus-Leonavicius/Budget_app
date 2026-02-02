'use client'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import type { TransactionsProps } from '@/@types/PropsTypes';
import { useTransactions } from './TransactionContext';

function TransactionsTable({transactions}: TransactionsProps) {
    const{deleteTransaction} = useTransactions()

    const handleDelete = (id: number) =>{
        deleteTransaction(id)
    }
  return (
    <div className='lg:mr-4 lg:ml-4 border border-gray-200 rounded-xl' >
        <TableContainer>
            <Table
                sx={{minWidth: 650}}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Ammount</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction) =>(
                            <TableRow
                                key={transaction.id}
                            >
                                <TableCell>{new Date(transaction.date).toDateString()}</TableCell>
                                <TableCell>{transaction.description}</TableCell>
                                <TableCell>{transaction.category}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                {transaction.type === 'Income' || transaction.type === 'Savings'?(
                                        <TableCell><p className='text-green-400'> + {transaction.amount}</p></TableCell>
                                    ):(
                                        <TableCell><p className='text-red-400'> - {transaction.amount}</p></TableCell>
                                    )}
                                <TableCell 
                                >
                                    {/*<button><EditIcon/></button>*/}
                                    <button 
                                        onClick={()=>handleDelete(Number(transaction.id))}    
                                    ><DeleteIcon/></button>
                                </TableCell>
                            </TableRow>
                        ))
                    ):(
                        <TableRow>
                            <TableCell>No transactions yet</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TransactionsTable
