import React from 'react'
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  
  
  export const data = {

    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: '',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
const Chart = ({data}) => {
    const Data= data['sparkline_in_7d']['price']
    console.log(Data)
  return (
    <div>Chart
        {/* <Line options={options} data={Data} /> */}
        </div>
  )
}

export default Chart;