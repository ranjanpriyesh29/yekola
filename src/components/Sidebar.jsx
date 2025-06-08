import { RxDashboard } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { SiAmazondocumentdb } from "react-icons/si";
import { TbPigMoney } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";

import SvgYelokaLogo from "../assets/yeloka.svg";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Overview",
    path: "/",
    icon: <RxDashboard size={20} />,
  },
  { name: "Classes", path: "/classes", icon: <GoBook size={18} /> },
  {
    name: "Resources",
    path: "/resources",
    icon: <SiAmazondocumentdb size={18} />,
  },
  { name: "Review", path: "/reviews", icon: <RiUserStarLine size={18} /> },
  { name: "Earnings", path: "/earnings", icon: <TbPigMoney size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="p-8 h-[calc(100vh-80px)] w-64 bg-gray-200/20">
      <div className="text-xl font-bold mb-10">
        <img src={SvgYelokaLogo} alt="Logo" className="w-[100px]" />
      </div>
      <div className="flex flex-col gap-3">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
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
