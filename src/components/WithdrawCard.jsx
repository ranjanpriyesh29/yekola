import { FaPiggyBank, FaWallet } from "react-icons/fa";

export default function WithdrawCard() {
  return (
    <div className="relative  bg-[#f2edfc] shadow-md rounded-xl p-4 w-full space-y-4 border  border-gray-200 overflow-hidden">
      <FaPiggyBank className="absolute top-2 left-2 text-[#A591EF] opacity-10 text-[80px] z-0 pointer-events-none" />

      <FaWallet className="absolute bottom-2 right-2 text-[#A591EF] opacity-10 text-[80px] z-0 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-sm text-gray-700 font-semibold">Your Earnings</div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm mt-2">
          <div>
            <div className="text-gray-900 font-bold text-lg">$15,010</div>
            <div className="text-gray-500">Today</div>
          </div>
          <div>
            <div className="text-orange-500 font-bold text-lg">$58</div>
            <div className="text-gray-500">Pending</div>
          </div>
          <div>
            <div className="text-indigo-600 font-bold text-lg">$70</div>
            <div className="text-gray-500">In Review</div>
          </div>
        </div>

        <div className="  rounded-lg p-3 flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-600">Available</p>
            <p className="text-lg font-bold text-green-600">$167</p>
          </div>
          <button className="bg-[#A591EF] hover:bg-[#8a74e8] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Withdraw
          </button>
          <button
            onClick={() => {}}
            className="text-[#A591EF] hover:text-[#8a74e8] underline text-sm font-medium cursor-pointer"
          >
            View Insights
          </button>
        </div>
      </div>
    </div>
  );
}
