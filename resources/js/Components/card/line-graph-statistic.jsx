import  { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);


ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

const LineGraph = (props) => {
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
    <div className={`${props.w} h-full px-4 py-3 ${props.bg} rounded-md shadow-md shadow-black/20`}>
        <div className="text-[1.1em] flex justify-between font-[900]">
            <h1>{props.title}</h1>
            <div>{props.side}</div>
        </div>
        <Line data={chartData} options={chartOptions} className="w-full h-full" />   
    </div>
  );
}
export default LineGraph