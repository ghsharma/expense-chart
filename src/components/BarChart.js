import { Chart as ChartJS, BarElement , CategoryScale , LinearScale , Tooltip , Legend} from 'chart.js'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {data} from '..data.json';

const BarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data from data.json using fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Update the path if necessary
        const data = await response.json();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Bar chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return loading ? (
    <div>Loading...</div>
  ) : chartData ? (
    <Bar data={chartData} options={options} />
  ) : (
    <div>Error loading data</div>
  );
};

export default BarChart;
