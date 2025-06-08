import { FaEllipsisV } from "react-icons/fa";

const UpcomingClass = () => {
  // Upcoming classes data
  const upcomingClasses = [
    {
      id: 1,
      title: "Lingala Intermidiate",
      instructor: "Alex Johnson",
      date: "Tomorrow, 10:00 AM",
      students: 24,
      duration: "2h",
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "Lingala Intermidiate",
      instructor: "Sarah Williams",
      date: "Jun 15, 2:00 PM",
      students: 18,
      duration: "3h",
      color: "bg-purple-100",
    },
    {
      id: 3,
      title: "Lingala Intermidiate",
      instructor: "Michael Chen",
      date: "Jun 17, 11:00 AM",
      students: 32,
      duration: "1.5h",
      color: "bg-amber-100",
    },
    {
      id: 4,
      title: "Lingala Intermidiate",
      instructor: "Emma Davis",
      date: "Jun 20, 3:30 PM",
      students: 15,
      duration: "2.5h",
      color: "bg-green-100",
    },
    {
      id: 5,
      title: "Lingala Intermidiate",
      instructor: "David Kim",
      date: "Jun 22, 9:00 AM",
      students: 21,
      duration: "4h",
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Classes
        </h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {upcomingClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${classItem.color}`}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            </div>

            <div className="ml-4 flex-1 min-w-0">
              <h3 className="font-medium text-gray-800 truncate">
                {classItem.title}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                Instructor: {classItem.instructor}
              </p>
            </div>

            <div className="ml-4 text-right">
              <p className="font-medium text-gray-800">{classItem.date}</p>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {classItem.students} students
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {classItem.duration}
                </span>
              </div>
            </div>

            <button className="ml-4 text-gray-400 hover:text-gray-600">
              <FaEllipsisV />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClass;
