import { useState, useEffect, useRef } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = (props) => {
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
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: props.xTitle,
        },
      },
      y: {
        title: {
          display: true,
          text: props.yTitle,
        },
      },
    },
  }

  return (
    <div className={`${props.w} h-full px-4 py-3 ${props.bg} rounded-[1rem] shadow-md shadow-black/20`}>
        <div className="text-[1.1em] font-[900]">
            <h1>{props.title}</h1>
        </div>
        <Bar data={chartData} options={chartOptions} />   
    </div>
  );
}
export default BarGraph