const StudentClasses = () => {
  const classes = [
    {
      title: "Swahili Basics",
      instructor: "Tata Grace",
      date: "June 14, 3:00 PM",
      status: "Ongoing",
    },
    {
      title: "Lingala Culture",
      instructor: "John Kabongo",
      date: "June 18, 5:00 PM",
      status: "Scheduled",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-6">My Classes</h2>
      <ul className="space-y-4">
        {classes.map((cls, idx) => (
          <li
            key={idx}
            className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-base font-semibold">{cls.title}</h3>
              <p className="text-sm text-gray-500">
                {cls.instructor} • {cls.date}
              </p>
            </div>
            <span className="text-sm font-medium text-indigo-600">
              {cls.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentClasses;
