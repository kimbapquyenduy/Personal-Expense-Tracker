import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarHome } from "../components/sidebar";
const App = () => {
  return (
    <div className="flex">
      <SidebarHome />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <Outlet />
      </div>
    </div>
  );
};
export default App;
