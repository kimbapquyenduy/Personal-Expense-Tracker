import { Button, Empty } from "antd";
import React, { useEffect, useState } from "react";
import BarChartBox from "../../chart/BarChartBox";
import ChartBox from "../../chart/ChartBox";
import PieChartBox from "../../chart/PieChartBox";
import Addcompo from "./Addcompo";
import DashList from "./DashList";
import { doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthConext";
import { db } from "../../../firebase";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setData(doc.data()?.Expense);
    });
  }, [user?.email]);
  return (
    <div className="w-full h-full flex gap-4 ">
      <div className=" w-[75%]">
        <ChartBox data={data} />

        <div className="w-full h-[75%] bg-white mt-12 flex">
          <BarChartBox />
          <PieChartBox />
        </div>
      </div>
      <div className=" w-[25%]">
        <DashList />
      </div>
    </div>
  );
};
