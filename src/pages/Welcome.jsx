import { Link } from "react-router-dom";
import Yeloka from "../assets/Logo-1 1.png";

const Welcome = () => {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-b from-[#DCC9FF] to-[#A591EF] px-6">
      <div className="text-center space-y-8">
        <Link to="/">
          <img src={Yeloka} alt="Logo" className="w-40 h-auto mx-auto" />
        </Link>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">Welcome to Yeloka!</h1>
          <p className="text-white text-sm">
            Choose your dashboard to get started.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <Link
            to="/student"
            className="bg-white text-[#7B4EFF] px-6 py-3 rounded-xl shadow-md font-semibold hover:bg-indigo-50 transition"
          >
            Student Dashboard
          </Link>
          <Link
            to="/instructor"
            className="bg-white text-[#7B4EFF] px-6 py-3 rounded-xl shadow-md font-semibold hover:bg-indigo-50 transition"
          >
            Instructor Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
