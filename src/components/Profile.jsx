import { MdKeyboardVoice } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import AnimatedWave from "../assets/animated-wave.svg";
import ProfilePic from "../assets/profile-pic2.jpg";
import WithdrawCard from "./WithdrawCard";

export function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-xl shadow w-96">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-semibold text-lg">Profile</h1>
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
          James Willian{" "}
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="font-normal hover:text-primary cursor-pointer">
            @jameswilliam
          </span>
        </h4>

        <div className="flex items-center w-full justify-center gap-2">
          <div className="bg-gray-200 rounded-full p-2">
            <MdKeyboardVoice size={20} />
          </div>

          {/* Animated Gradient Sound Wave */}
          <div className="flex-1 max-w-[200px]">
            <img src={AnimatedWave} alt="" />
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">
          I'm a Lingala Instructor
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <h2 className="text-sm font-semibold min-w-[60px]">Speaks</h2>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border">
                <img
                  src="https://flagcdn.com/w40/sn.png"
                  alt="Senegal"
                  className="w-full h-full object-cover"
                  title="Senegal"
                />
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border">
                <img
                  src="https://flagcdn.com/w40/tz.png"
                  alt="Tanzania"
                  className="w-full h-full object-cover"
                  title="Tanzania, United Republic of"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <h2 className="text-sm font-semibold min-w-[60px]">Teaching</h2>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border">
                <img
                  src="https://flagcdn.com/w40/sn.png"
                  alt="Senegal"
                  className="w-full h-full object-cover"
                  title="Senegal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
