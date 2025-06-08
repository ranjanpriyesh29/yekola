import { monthlyEarningsData } from "./chartsData";
import ReusableChartWidget from "./ReusableChartWidget";

const MonthlyEarnings = () => {
  return (
    <ReusableChartWidget
      title="Monthly Earnings"
      chartType="bar"
      datasets={monthlyEarningsData}
      tabs={["monthly", "quarterly", "early"]}
      footerStats={{
        label: "Total Earnings",
        value: "$36,800",
        change: "+12.5%",
        subtext: "vs last period",
      }}
    />
  );
};

export default MonthlyEarnings;
