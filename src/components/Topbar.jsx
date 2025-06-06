import { TbBell } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold">Hello James Willian 👋</h2>
        <p className="text-sm text-gray-500">
          Let's learn something new today!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search from courses..."
          className="px-4 py-2 border rounded-full w-72 bg-gray-100/60 border-gray-200"
        />
        <button className="w-10 h-10 rounded-full border flex items-center justify-center">
          <TbBell size={24} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
