import ReusableChartWidget from "./ReusableChartWidget";
import { weeklyEarningsData } from "./chartsData";

const WeeklyEarning = () => {
  return (
    <ReusableChartWidget
      title="Weekly Earnings Trends"
      chartType="bar"
      datasets={weeklyEarningsData}
      tabs={["weekly"]}
    />
  );
};

export default WeeklyEarning;
