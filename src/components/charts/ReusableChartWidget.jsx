// ReusableChartWidget.tsx
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReusableChartWidget = ({
  title,
  chartType,
  datasets,
  tabs = [],
  footerStats,
}) => {
  const defaultTab = tabs[0] || Object.keys(datasets)[0];
  const [activeTab, setActiveTab] = useState(defaultTab);

  const currentData = datasets[activeTab];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 12,
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0, 0, 0, 0.05)" },
        ticks: {
          callback: (value) => "$" + value.toLocaleString(),
        },
      },
    },
  };

  const ChartComponent = chartType === "bar" ? Bar : Line;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {tabs.length > 0 && (
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-lg text-sm ${
                  activeTab === tab
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-72">
        {currentData ? (
          <ChartComponent data={currentData} options={chartOptions} />
        ) : (
          <p className="text-sm text-gray-500">
            No data available for {activeTab}
          </p>
        )}
      </div>

      {footerStats && (
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
          <div>
            <p className="text-gray-500 text-sm">{footerStats.label}</p>
            <p className="text-xl font-bold text-gray-800">
              {footerStats.value}
            </p>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-sm font-medium">
              {footerStats.change}
            </p>
            <p className="text-gray-500 text-sm">{footerStats.subtext}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReusableChartWidget;
