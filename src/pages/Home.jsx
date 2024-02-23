import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  let params = useParams();
  console.log(params);
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
