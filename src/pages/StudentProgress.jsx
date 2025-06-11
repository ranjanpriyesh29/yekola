import ReusableChartWidget from "../components/charts/ReusableChartWidget";

const progressChartData = {
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Study Hours",
        data: [5, 6, 8, 7],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
        borderRadius: 6,
      },
    ],
  },
};

const StudentProgress = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Progress Overview</h2>
      <ReusableChartWidget
        title="Weekly Study Hours"
        chartType="bar"
        datasets={progressChartData}
        tabs={["weekly"]}
        footerStats={{
          label: "Total Hours",
          value: "26h",
          change: "+8.5%",
          subtext: "vs last week",
        }}
      />
    </div>
  );
};

export default StudentProgress;
