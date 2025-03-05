import React from 'react';
import { Line } from 'react-chartjs-2';
import covidData from '@/data/covid.json';
import { CovidData } from '@/types/CovidData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './CovidChart.module.css';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Utility function to parse numbers (handles strings with space separators)
function parseValue(value: string | number): number {
  if (typeof value === 'number') return value;
  return parseInt(value.replace(/\s/g, ''), 10);
}

const CovidChart: React.FC = () => {
  // Type the imported JSON data as CovidData array
  const dataArray: CovidData[] = covidData;
  const dates = dataArray.map(item => item.Date);
  const totalConfirmed = dataArray.map(item => parseValue(item['Total Confirmed Cases']));
  const dailyConfirmed = dataArray.map(item => parseValue(item['Daily Confirmed Cases']));

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Total Confirmed Cases',
        data: totalConfirmed,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Daily Confirmed Cases',
        data: dailyConfirmed,
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'COVID-19 Data Visualization',
        font: {
          size: 20,
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
        },
      },
      y: {
        ticks: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className={styles.chartWrapper}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CovidChart;
