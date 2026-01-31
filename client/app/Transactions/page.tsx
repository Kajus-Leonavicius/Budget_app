'use client'
import Sidebar from '@/components/Sidebar'
import TransactionsTable from '@/components/TransactionsTable'
import ToolBar from '@/components/ToolBar'
import Widget from '@/components/Widget'
import { useTransactions } from '@/components/TransactionContext'

function Page() {
  //const [transactions, setTransactions] = useState<Transactions[]>([])

  const {transactions} = useTransactions()


  return (
    <div className='flex lg:h-screen w-full'>
        <div className='hidden sm:hidden'>
            <Sidebar/>
        </div>
        <div className='w-full lg:flex-1'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
              <Widget
                title={'Account Balance'}
                data={2000}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'This month expanses'}
                data={1000}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'This month income'}
                data={2000}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'Savings?'}
                data={2000}
                info={'kazkas gerai arba blogai'}
              />
            </div>
            <ToolBar/>
            <TransactionsTable
              transactions={transactions}
            />
        </div>
    </div>
  )
}

export default Page
