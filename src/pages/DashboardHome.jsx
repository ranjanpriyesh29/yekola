import MonthlyEarnings from "../components/charts/MonthlyEarnings";
import ChartWidget from "../components/ChartWidget";
import DashboardCardGrid from "../components/DashboardCardGrid";
import UpcomingClass from "../components/UpcomingClass";

const DashboardHome = () => {
  return (
    <>
      <DashboardCardGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mt-10">
        <MonthlyEarnings />
        <UpcomingClass />
      </div>
    </>
  );
};

export default DashboardHome;
