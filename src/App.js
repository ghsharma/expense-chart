import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, BarElement , CategoryScale , LinearScale , Tooltip , Legend, Title} from 'chart.js'
import logo from './logo.svg'
import './App.css'


ChartJS.register(CategoryScale, LinearScale, BarElement ,Title, Tooltip)

function App() {
  const state  = {
    labels: ["mon", "tue", "wed", "thr", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 5,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 42.28, 25.48]
      },
    ],
  }

  return (
    <>
    <div className='container'>

    <article className='headerbox'>
      <h2><span>My Balance</span><br/>
      $921.48</h2>

      <img src={logo} />
    </article>

      <article className='mainbox'>

      <article className='barbox'>
      <h1>Spending - Last 7 days </h1>
      <Bar data={state}/>
      

      <hr/>
      
      <article className='detailbox'>
      <h2><span>total this month</span><br/>
      $478.33</h2>
      <p>+2.4%<br/>
      <span>from last month</span></p>
      </article>

      </article>


      </article>

    </div>
    </>
  );
}

export default App;
