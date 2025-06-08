import WeeklyEarnedVsWithdraw from "./WeeklyEarnedVsWithdraw";
import WeeklyEarning from "./WeeklyEarning";

const EarningChartDashboard = () => {
  return (
    <section className="px-4 py-6">
      <h3 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
        Earnings Overview
      </h3>
      <div className="grid grid-cols-2">
        <div className="mb-6">
          <WeeklyEarning />
        </div>
        <div>
          <WeeklyEarnedVsWithdraw />
        </div>
      </div>
    </section>
  );
};

export default EarningChartDashboard;
