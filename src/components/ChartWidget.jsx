import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartWidget = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const monthlyEarningsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings ($)",
        data: [
          4500, 5200, 4800, 6100, 7500, 8200, 6900, 9200, 8800, 10100, 9700,
          11500,
        ],
        backgroundColor: "rgba(79, 70, 229, 0.7)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Monthly Earnings
        </h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              activeTab === "monthly"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              activeTab === "quarterly"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("quarterly")}
          >
            Quarterly
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              activeTab === "yearly"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="h-72">
        <Bar data={monthlyEarningsData} options={chartOptions} />
      </div>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
        <div>
          <p className="text-gray-500 text-sm">Total Earnings</p>
          <p className="text-xl font-bold text-gray-800">$5,6500</p>
        </div>
        <div className="text-right">
          <p className="text-green-500 text-sm font-medium">+18.2%</p>
          <p className="text-gray-500 text-sm">vs last month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartWidget;
