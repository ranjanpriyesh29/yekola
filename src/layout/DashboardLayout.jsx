// src/layouts/DashboardLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { ProfileCard } from "../components/Profile";
import ChatWidget from "../components/chat/ChatWidget";
import StudentProfileCard from "../components/StudentProfileCard";

const DashboardLayout = () => {
  const location = useLocation();
  const isStudent = location.pathname.startsWith("/student");

  return (
    <section className="bg-gradient-to-b from-white via-[#DCC9FF] to-[#A591EF] p-10 relative">
      <div className="grid grid-cols-[auto_1fr_auto] bg-white rounded-4xl overflow-hidden shadow">
        <Sidebar />
        <main className="p-8">
          <Topbar />
          {/* Main route content */}
          <div className="mt-10">
            <Outlet />
          </div>
        </main>
        <aside className="p-8 bg-white">
          {isStudent ? <StudentProfileCard /> : <ProfileCard />}
        </aside>
      </div>
      <ChatWidget />
    </section>
  );
};

export default DashboardLayout;
