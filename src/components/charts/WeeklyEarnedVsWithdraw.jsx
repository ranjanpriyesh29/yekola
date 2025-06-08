import ReusableChartWidget from "./ReusableChartWidget";
import { earnedVsWithdrawnData } from "./chartsData";

const WeeklyEarnedVsWithdraw = () => {
  return (
    <ReusableChartWidget
      chartType="line"
      datasets={earnedVsWithdrawnData}
      title="Earn vs Withdrawn"
      tabs={["weekly", "yearly"]}
    />
  );
};

export default WeeklyEarnedVsWithdraw;
