import { BsGraphUpArrow } from "react-icons/bs";

const InsightSummary = () => {
  return (
    <div className="bg-[#edfcf3] shadow-md border border-gray-200 rounded-xl p-4 relative">
      <BsGraphUpArrow className="absolute top-2  text-[#A591EF] opacity-10 text-[80px] z-0 pointer-events-none" />
      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
        Insights Summary
      </h3>
      <ul className="text-sm text-gray-600 space-y-3">
        <li className="flex items-center gap-2">
          📈 <span>Total Transactions:</span> <strong>68</strong>
        </li>
        <li className="flex items-center gap-2">
          💸 <span>Withdrawn (This Month):</span> <strong>$920</strong>
        </li>
        <li className="flex items-center gap-2">
          ⏳ <span>Avg Payout Time:</span> <strong>3 Days</strong>
        </li>
      </ul>
    </div>
  );
};

export default InsightSummary;
