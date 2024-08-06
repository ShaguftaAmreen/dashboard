import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as ChartLegend, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, ChartLegend, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Home() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const ctx = document.getElementById('myLineChart').getContext('2d');
    
    // Cleanup function to destroy existing chart instance if it exists
    let myLineChart;
    if (ctx.chart) {
      ctx.chart.destroy();
    }

    myLineChart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sample Data',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Store the chart instance on the context object
    ctx.chart = myLineChart;

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (myLineChart) {
        myLineChart.destroy();
      }
    };
  }, []);

  return (
    <main className='main-container' style={{position:"relative"}}>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='charts-container' style={{ display: 'flex', width: '100%' }}>
      {/* <div style={{borderBottom:"1px solid #dadada"}}></div> */}
        <div style={{ width: '50%',height:"100%" }}>
        <div style={{borderBottom:"1px solid #dadada"}}> <p style={{color:"black"}}>Sales VS Orders</p></div>
          <canvas id='myLineChart' style={{ width: '100%', height: '100%' }}></canvas>
        </div>

        <div style={{ width: '50%',height:"90%", marginLeft:"2px"}}>
          <div style={{borderBottom:"1px solid #dadada",color:"black"}}><p>Portion of Sales</p></div>
          <div style={{ width: '100%', height: '50%' }}>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

