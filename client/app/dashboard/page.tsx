'use client'
import Sidebar from '@/components/Sidebar'
import TransactionsTable from '@/components/TransactionsTable'
import ToolBar from '@/components/ToolBar'
import Widget from '@/components/Widget'
import { useTransactions } from '@/components/TransactionContext'
import TopNavBar from '@/components/TopNavBar'
import { useMe } from '@/components/MeContext'
import { PieChart } from '@mui/x-charts'
import { useMemo } from 'react'

function Page() {
  //const [transactions, setTransactions] = useState<Transactions[]>([])

  const {transactions} = useTransactions()
  const {me} = useMe()

  const formatedChart = useMemo(()=> {

    const categoryMap: Record<string, number> = {}

    transactions.forEach(t => {
      if(t.type === 'Expenses'){
        categoryMap[t.category] = (categoryMap[t.category] || 0) + Number(t.amount)
      }
    })

    return Object.keys(categoryMap).map((cat, index) => ({
      id: index,
      value: categoryMap[cat],
      label: cat
    }))
  }, [transactions])


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
            <div className='grid grid-cols-2 gap-2 mr-4 ml-4 m-6'>
              <Widget
                title='Income vs expenses'
              >
                <PieChart
                  series={[
                    {
                      data: [
                        {id: 0, value: Number(me.monthlyIncome), label: 'income'},
                        {id: 1, value: Number(me.monthlyExpenses), label: 'expenses'}
                      ]
                    }
                  ]}
                />
              </Widget>
              <Widget
                title='Expenses By category'
              >
                {formatedChart.length > 0 ? (
                  <PieChart
                    series={[
                      {
                        data: formatedChart,
                        innerRadius: 30,
                        paddingAngle: 5,
                        cornerRadius: 5
                      }
                    ]}
                  />
                ): (
                  <p>Nera duomenu</p>
                )}
              </Widget>
            </div>
        </div>
    </div>
  )
}

export default Page
