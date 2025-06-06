import ChartWidget from "../components/ChartWidget";
import ChatWidget from "../components/chat/ChatWidget";
import DashboardCardGrid from "../components/DashboardCardGrid";
import { ProfileCard } from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UpcomingClass from "../components/UpcomingClass";

const Dashboard = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#DCC9FF] to-[#A591EF] p-10 relative">
      <div className="grid grid-cols-[auto_1fr_auto] bg-white rounded-4xl overflow-hidden shadow">
        <Sidebar />
        <main className="p-8">
          <Topbar />
          <div className="mt-10">
            <DashboardCardGrid />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mt-10">
              <ChartWidget />
              <UpcomingClass />
            </div>
          </div>
        </main>
        <aside className="p-8 bg-white">
          <ProfileCard />
        </aside>
      </div>
      <ChatWidget />
    </section>
  );
};

export default Dashboard;
