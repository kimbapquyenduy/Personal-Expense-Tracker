import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SidebarHome } from "../components/sidebar";
import React from "react";
import { UserAuth } from "../context/AuthConext";
import { Navbar } from "../components/Navbar";

const App = () => {
  const { user } = UserAuth();

  return (
    <div className="flex">
      <SidebarHome />
      <div className="h-screen flex-1 p-7 bg-[#f1f1f1] ">
        {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
        <Outlet />
      </div>
    </div>
  );
};
export default App;
