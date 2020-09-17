import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Chart from 'react-google-charts'

function Dashboard() {
  const Title = 'Register of quantity the first semester'
  const [data, setData] = useState([
    ['Month', 'Quantity'],
    ['January', 33],
    ['February', 68],
    ['March', 49],
    ['April', 15],
    ['May', 80],
    ['June', 27]
  ])

  useEffect(() => {
    function changeGraphics(){
      const dataGraphics = data.map(line => {
        if(Number.isInteger(line[1])) {
          line[1] = Math.floor(Math.random() * 101)
        }

        return line
      })

      setData(dataGraphics)
    }

    const intervalID = setInterval(() => changeGraphics(), 5000)

    return () => {
      clearInterval(intervalID)
    }

  },[data])
 
  return (
    <div>
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

      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: Title,
          is3D: true
        }}
      />

      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: Title,
          pieHole: 0.4
        }}
      />

      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={data}
        options={{
          title: Title,
          chartArea:{ width: '50%' },
          hAxis:{ title: 'Quantity' },
          vAxis:{ title: 'Month'},
          animation:{ duration: 1000, easing: 'out', startup: true}
        }}
      />

      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={data}
        options={{
          title: Title,
          hAxis:{ title: 'Month' },
          vAxis:{ title: 'Quantity'},
          animation:{ duration: 1000, easing: 'out', startup: true}
        }}
      />

      <Chart 
        width={'400px'}
        height={'300px'}
        chartType={'AreaChart'}
        data={data}
        options={{
          title: Title,
          hAxis:{ title: 'Month' },
          vAxis:{ title: 'Quantity'},
          animation:{ duration: 1000, easing: 'out', startup: true}
        }}
      />
    </div>
  )
}

export default Dashboard
