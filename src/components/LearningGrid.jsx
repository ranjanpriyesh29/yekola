import DashboardCard from "./DashboardCard";
import { FaBookOpen, FaClock, FaCertificate, FaStar } from "react-icons/fa";

const LearningGrid = () => {
  const cards = [
    {
      title: "Courses Enrolled",
      value: "4",
      icon: <FaBookOpen size={20} />,
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
      },
    },
    {
      title: "Hours Learned",
      value: "12h",
      icon: <FaClock size={20} />,
      color: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
      },
    },
    {
      title: "Certificates",
      value: "2",
      icon: <FaCertificate size={20} />,
      color: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        border: "border-amber-500",
      },
    },
    {
      title: "Points Earned",
      value: "425",
      icon: <FaStar size={20} />,
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

export default LearningGrid;
