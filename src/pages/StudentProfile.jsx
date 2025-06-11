import {
  FaUserGraduate,
  FaGlobeAfrica,
  FaLanguage,
  FaBookOpen,
} from "react-icons/fa";
import ProfilePic from "../assets/profile-pic2.jpg";

const StudentProfile = () => {
  const profile = {
    name: "James Willian",
    username: "@jameswilliam",
    bio: "Language Enthusiast and learner",
    speaks: ["🇸🇳", "🇹🇿"],
    learning: ["🇨🇩"],
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow max-w-3xl mx-auto">
      <div className="flex items-center gap-6">
        <img
          src={ProfilePic}
          alt="avatar"
          className="w-28 h-28 rounded-full border-4 border-primary object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaUserGraduate className="text-primary" /> {profile.name}
          </h2>
          <p className="text-sm text-gray-500">{profile.username}</p>
          <p className="text-gray-600 mt-2 italic">{profile.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaLanguage className="text-indigo-500" /> Speaks
          </h3>
          <div className="flex gap-3 text-2xl">
            {profile.speaks.map((flag, i) => (
              <span key={i}>{flag}</span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaGlobeAfrica className="text-green-500" /> Learning
          </h3>
          <div className="flex gap-3 text-2xl">
            {profile.learning.map((flag, i) => (
              <span key={i}>{flag}</span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 col-span-full">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaBookOpen className="text-amber-500" /> About Me
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Hi! I'm James, a passionate learner diving into the beauty of
            African languages. I'm currently enrolled in 4 language courses and
            love engaging with diverse cultures through language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
