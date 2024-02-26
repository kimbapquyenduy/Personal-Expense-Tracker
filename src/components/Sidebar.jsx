import {
  BarChart4,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Folder,
  LayoutDashboard,
  MessageSquare,
  MoveLeft,
  Search,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Dashboard } from "./sidebarChild/Dashboard";

export const SidebarHome = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <LayoutDashboard /> },
    { title: "Expense", src: <MessageSquare /> },
    { title: "Accounts", src: <User />, gap: true },
    { title: "Schedule ", src: <CalendarDays /> },
    { title: "Search", src: <Search /> },
    { title: "Analytics", src: <BarChart4 /> },
    { title: "Files ", src: <Folder />, gap: true },
    { title: "Setting", src: <Settings /> },
  ];

  return (
    <>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}

        <ChevronLeft
          className={` text-dark-purple bg-white absolute cursor-pointer -right-3 top-9 w-6 border-dark-purple
        border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={`/${index != 0 ? Menu.title : ""}`}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.src}

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
