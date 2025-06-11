import { RxDashboard } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { SiAmazondocumentdb } from "react-icons/si";
import { TbPigMoney } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";

import { useLocation, NavLink, Link } from "react-router-dom";
import SvgYelokaLogo from "../assets/yeloka.svg";

const instructorMenuItems = [
  {
    name: "Overview",
    path: "/instructor",
    icon: <RxDashboard size={20} />,
  },
  { name: "Classes", path: "/instructor/classes", icon: <GoBook size={18} /> },
  {
    name: "Resources",
    path: "/instructor/resources",
    icon: <SiAmazondocumentdb size={18} />,
  },
  { name: "Review", path: "/instructor/reviews", icon: <RiUserStarLine size={18} /> },
  { name: "Earnings", path: "/instructor/earnings", icon: <TbPigMoney size={18} /> },
  { name: "Profile", path: "/instructor/profile", icon: <CgProfile size={18} /> },
];

const studentMenuItems = [
  { name: "Dashboard", path: "/student", icon: <RxDashboard size={20} /> },
  { name: "My Classes", path: "/student/classes", icon: <GoBook size={18} /> },
  {
    name: "Progress",
    path: "/student/progress",
    icon: <BsGraphUpArrow size={18} />,
  },
  {
    name: "Certificates",
    path: "/student/certificates",
    icon: <HiDocumentText size={18} />,
  },
  { name: "Profile", path: "/student/profile", icon: <CgProfile size={18} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const isStudent = pathname.startsWith("/student");

  const menuItems = isStudent ? studentMenuItems : instructorMenuItems;

  return (
    <aside className="p-8 h-screen w-64 bg-gray-200/20 sticky top-0">
      <div className="text-xl font-bold mb-10">
        <Link to="/">
          <img src={SvgYelokaLogo} alt="Logo" className="w-[100px]" />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            end={item.path === "/student" || item.path === "/instructor"}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                isActive ? "bg-primary text-white" : "hover:bg-gray-100"
              }`
            }
          >
            <div>{item.icon}</div>
            <div className="flex-1 flex justify-between items-center text-[15px]">
              <span>{item.name}</span>
              {item.badge && (
                <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
