const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
        color?.border
          ? `border-t-4 ${color.border}`
          : "border-t-4 border-indigo-500"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          {icon && (
            <div
              className={`p-3 rounded-lg ${color?.bg || "bg-indigo-100"} ${
                color?.text || "text-indigo-600"
              }`}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
