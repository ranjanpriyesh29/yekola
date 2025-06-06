// src/components/DashboardCardGrid.jsx
import React from "react";
import DashboardCard from "./DashboardCard";
import {
  FaDollarSign,
  FaMoneyCheckAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";

const DashboardCardGrid = () => {
  const cards = [
    {
      title: "Total Earning",
      value: "$5,6500 K",
      icon: <FaDollarSign size={20} />,
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
      },
    },
    {
      title: "Payouts",
      value: "$9,6419 K",
      icon: <FaMoneyCheckAlt size={20} />,
      color: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
      },
    },
    {
      title: "Classes",
      value: "10",
      icon: <FaChalkboardTeacher size={20} />,
      color: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        border: "border-amber-500",
      },
    },
    {
      title: "Students",
      value: "24",
      icon: <FaUserGraduate size={20} />,
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

export default DashboardCardGrid;
