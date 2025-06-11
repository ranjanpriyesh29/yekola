import LearningGrid from "../components/LearningGrid";
import UpcomingClass from "../components/UpcomingClass";
import ReusableChartWidget from "../components/charts/ReusableChartWidget";

const learningProgressData = {
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Study Hours",
        data: [5, 8, 6, 9],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
        borderRadius: 6,
      },
    ],
  },
};

const StudentDashboardHome = () => {
  return (
    <>
      {/* Student-focused stats */}
      <LearningGrid />

      {/* Charts & Upcoming Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mt-10">
        <ReusableChartWidget
          title="Weekly Learning Progress"
          chartType="bar"
          datasets={learningProgressData}
          tabs={["weekly"]}
          footerStats={{
            label: "Total Hours",
            value: "28h",
            change: "+17.9%",
            subtext: "vs last week",
          }}
        />
        <UpcomingClass />
      </div>
    </>
  );
};

export default StudentDashboardHome;
