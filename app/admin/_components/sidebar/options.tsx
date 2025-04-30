"use client";
import { useState } from "react";
import {
  Calendar,
  User,
  ListChecks,
  FileText,
  Table,
  Layout,
  Mail,
  Inbox,
  DollarSign,
  Video,
  Camera,
  MonitorPlay,
  Store,
  LucideBarChart3,
  NotebookPen,
  Users,
  HomeIcon,
} from "lucide-react"; // Lucide Icons
import { useSidebar } from "@/store/use-sidebar";
import { Toggle } from "./toggle";
import Link from "next/link";

const Options = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  // Handles item selection and submenu toggle
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === "Tasks") {
      setSubmenuOpen(!submenuOpen);
    } else {
      setSubmenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LucideBarChart3 /> },
    // { name: "Events", href: "/admin/eventos", icon: <NotebookPen /> },
    { name: "Emails", href: "/admin/emails", icon: <Inbox /> },
    { name: "Sales", href: "/admin/ventas", icon: <DollarSign /> },
    // { name: "Usuarios", href: "/admin/users", icon: <Users /> },
  ];

  if (!collapsed) {
    return (
      <div className="h-screen lg:w-60 text-slate-900 px-5 pb-4 flex flex-col overflow-y-scroll">
        {/* <Toggle /> */}
        <div>
          <div className="text-lg font-semibold mb-5">Admin panel</div>

          {/* Main menu */}
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <button
                    className={`flex items-center w-full p-2 rounded-sm 
              ${activeItem === item.name ? "bg-stone-400" : "hover:bg-stone-300"}`}
                    onClick={() => handleItemClick(item.name)}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {item.name}
                    {/* {item.hasSubmenu && (
                      <span className="ml-auto">{submenuOpen ? "▲" : "▼"}</span>
                    )} */}
                  </button>
                </Link>
                {/* Submenu */}
                {/* {item.hasSubmenu && submenuOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg 
                    ${activeItem === "Sub Task 1" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveItem("Sub Task 1")}
                      >
                        Store
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg 
                    ${activeItem === "Sub Task 2" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveItem("Sub Task 2")}
                      >
                        Videos
                      </button>
                    </li>
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen lg:w-60 text-white px-5 pb-4 flex flex-col overflow-y-scroll">
      {/* <Toggle /> */}
      <div>
        <div className="text-lg font-semibold mb-5 mx-auto">Menu </div>

        {/* Main menu */}
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === item.name ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
