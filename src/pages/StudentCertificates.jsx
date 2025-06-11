const StudentCertificates = () => {
  const certificates = [
    {
      course: "Swahili Basics",
      date: "Completed: May 20, 2024",
      link: "#",
    },
    {
      course: "Lingala Culture",
      date: "Completed: April 15, 2024",
      link: "#",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-6">My Certificates</h2>
      <ul className="space-y-4">
        {certificates.map((cert, idx) => (
          <li
            key={idx}
            className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-base font-semibold">{cert.course}</h3>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
            <a
              href={cert.link}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Download PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCertificates;
