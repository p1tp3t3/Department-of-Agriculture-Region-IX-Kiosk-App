import { useState, useEffect, useRef } from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const labels = props.label


  const chartData = {
    labels: labels,
    datasets: props.dataset
    ,
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    }
  }

  return (
    <div className={`${props.w} h-full px-4 py-3 ${props.bg} rounded-md shadow-md shadow-black/20 bg-white`}>
        <div className="text-[1.1em] font-[900]">
            <h1>{props.title}</h1>
        </div>
        <Doughnut data={chartData} options={chartOptions} />  
    </div>
  );
}
export default DoughnutChart