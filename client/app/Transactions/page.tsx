'use client'
import Sidebar from '@/components/Sidebar'
import TransactionsTable from '@/components/TransactionsTable'
import ToolBar from '@/components/ToolBar'
import Widget from '@/components/Widget'
import { useTransactions } from '@/components/TransactionContext'
import TopNavBar from '@/components/TopNavBar'
import { useMe } from '@/components/MeContext'

function Page() {
  //const [transactions, setTransactions] = useState<Transactions[]>([])

  const {transactions} = useTransactions()
  const {me} = useMe()


  return (
    <div className='flex lg:h-screen w-full flex-col'>
        <div>
          <TopNavBar/>
        </div>
        <div className='hidden sm:hidden'>
            <Sidebar/>
        </div>
        <div className='w-full lg:flex-1'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
              <Widget
                title={'Account Balance'}
                data={me.balance}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'This month expanses'}
                data={me.monthlyExpenses}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'This month income'}
                data={me.monthlyIncome}
                info={'kazkas gerai arba blogai'}
              />
              <Widget
                title={'Savings?'}
                data={me.savings}
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
