import { FaDollarSign } from "react-icons/fa";
import { GiEmptyHourglass } from "react-icons/gi";
import DashboardCard from "./DashboardCard";

const EarningGrid = () => {
  const cards = [
    {
      title: "Weeks's earn",
      value: "$1.597",
      icon: <FaDollarSign size={20} />,
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
      },
    },
    {
      title: "Months's Earn",
      value: "$2.134 ",
      icon: <FaDollarSign size={20} />,
      color: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
      },
    },
    {
      title: "Year Earn",
      value: "12.134",
      icon: <FaDollarSign size={20} />,
      color: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        border: "border-amber-500",
      },
    },
    {
      title: "Hours",
      value: "12.00",
      icon: <GiEmptyHourglass size={20} />,
      color: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-500",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <DashboardCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default EarningGrid;
