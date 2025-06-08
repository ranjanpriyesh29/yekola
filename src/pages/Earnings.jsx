import EarningChartDashboard from "../components/charts/EarningChartDashboard";
import EarningGrid from "../components/EarningGrid";
import InsightSummary from "../components/InsightSummary";
import Tip from "../components/Tip";
import WithdrawCard from "../components/WithdrawCard";

const Earnings = () => {
  return (
    <>
      <EarningGrid />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 mt-10">
        <div className="lg:col-span-5">
          <WithdrawCard />
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-6">
          <InsightSummary />
          <Tip />
        </div>
      </div>
      <EarningChartDashboard />
    </>
  );
};

export default Earnings;
