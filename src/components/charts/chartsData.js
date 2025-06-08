export const monthlyEarningsData = {
  monthly: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings ($)",
        data: [
          4500, 5200, 4800, 6100, 7500, 8200, 6900, 9200, 8800, 10100, 9700,
          11500,
        ],
        backgroundColor: "rgba(79, 70, 229, 0.7)",
        borderRadius: 6,
      },
    ],
  },
};

export const earnedVsWithdrawnData = {
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Earned",
        data: [400, 600, 800, 500],
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.3,
      },
      {
        label: "Withdrawn",
        data: [200, 300, 500, 200],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.3,
      },
    ],
  },
};

export const yearlyComparisonData = {
  yearly: {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Earnings",
        data: [62000, 74500, 80000, 91500],
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderRadius: 6,
      },
    ],
  },
};

export const weeklyEarningsData = {
  weekly: {
    labels: ["May 1–7", "May 8–14", "May 15–21", "May 22–28"],
    datasets: [
      {
        label: "Earnings ($)",
        data: [1200, 1350, 980, 1600],
        backgroundColor: "rgba(99, 102, 241, 0.7)", // Tailwind indigo-500
        borderRadius: 6,
      },
    ],
  },
};
