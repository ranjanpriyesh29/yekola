import {
  FaChalkboardTeacher,
  FaMicrophone,
  FaAward,
  FaGlobeAfrica,
} from "react-icons/fa";
import ProfilePic from "../assets/profile-pic2.jpg";
import AnimatedWave from "../assets/animated-wave.svg";

const InstructorProfile = () => {
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
            <FaChalkboardTeacher className="text-indigo-600" /> Tata Grace
          </h2>
          <p className="text-sm text-gray-500">@tatagrace</p>
          <p className="text-gray-600 mt-2 italic">
            Swahili & Lingala Language Instructor passionate about cultural
            storytelling.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaGlobeAfrica className="text-green-500" /> Languages Spoken
          </h3>
          <div className="flex gap-3 text-2xl">
            <span>🇸🇳</span>
            <span>🇹🇿</span>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaAward className="text-yellow-500" /> Achievements
          </h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>300+ hours of teaching</li>
            <li>Rated 4.9 ★ by students</li>
            <li>Global Cultural Contributor 2023</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 col-span-full">
          <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-4">
            <FaMicrophone className="text-pink-500" /> Audio Intro
          </h3>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaMicrophone size={20} className="text-gray-700" />
            </div>
            <img src={AnimatedWave} alt="audio" className="max-w-[200px]" />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Tap mic to hear an intro by Tata Grace
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
