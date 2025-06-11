import { MdKeyboardVoice } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaGraduationCap, FaTrophy, FaClock } from "react-icons/fa";

import AnimatedWave from "../assets/animated-wave.svg";
import ProfilePic from "../assets/profile-pic2.jpg";

const StudentProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow w-96">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-semibold text-lg">Student Profile</h1>
        <div className="shadow p-3 rounded-md">
          <FiEdit size={18} className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="w-full rounded-t-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${ProfilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-full size-24 mb-2 object-cover border-gray-200 border-4 p-1 my-0 mx-auto"
          />
        </div>

        <h4 className="font-semibold flex items-center gap-1 justify-center">
          James Willian
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span className="font-normal hover:text-primary cursor-pointer">
            @jameswilliam
          </span>
        </h4>

        <div className="flex items-center w-full justify-center gap-2">
          <div className="bg-gray-200 rounded-full p-2">
            <MdKeyboardVoice size={20} />
          </div>
          <div className="flex-1 max-w-[200px]">
            <img src={AnimatedWave} alt="Audio Wave" />
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center">
          Passionate learner exploring African languages
        </p>

        <div className="mt-6 space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <FaGraduationCap className="mt-0.5 text-indigo-500" />
            <div>
              <p className="font-medium">Courses Enrolled</p>
              <p className="text-gray-500">4 active courses</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="mt-0.5 text-green-500" />
            <div>
              <p className="font-medium">Time Spent Learning</p>
              <p className="text-gray-500">12 hours this month</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaTrophy className="mt-0.5 text-yellow-500" />
            <div>
              <p className="font-medium">Badges Earned</p>
              <p className="text-gray-500">
                Beginner, Streak Master, Quiz Champ
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <h2 className="text-sm font-semibold min-w-[60px]">Speaks</h2>
            <div className="flex gap-2">
              <img
                src="https://flagcdn.com/w40/sn.png"
                alt="Senegal"
                className="w-6 h-6 rounded-full border"
                title="Senegal"
              />
              <img
                src="https://flagcdn.com/w40/tz.png"
                alt="Tanzania"
                className="w-6 h-6 rounded-full border"
                title="Tanzania"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <h2 className="text-sm font-semibold min-w-[60px]">Learning</h2>
            <div className="flex gap-2">
              <img
                src="https://flagcdn.com/w40/cd.png"
                alt="Congo"
                className="w-6 h-6 rounded-full border"
                title="Congo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
