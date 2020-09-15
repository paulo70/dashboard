import React, {useState} from 'react'
import './dashboard.css'
import Chart from 'react-google-charts'

function Dashboard() {
  const Title = 'Register of quantity the first semester'
  const [data, setData] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ])
  return (
    <>
      <h1>Dashboard</h1>
      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: Title
        }}
      />
    </>
  )
}

export default Dashboard
