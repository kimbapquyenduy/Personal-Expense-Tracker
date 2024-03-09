import { Button, Empty } from "antd";
import React, { useEffect, useState } from "react";
import BarChartBox from "../../chart/BarChartBox";
import ChartBox from "../../chart/ChartBox";
import PieChartBox from "../../chart/PieChartBox";
import Addcompo from "./Addcompo";
import DashList from "./DashList";
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthConext";
import { db } from "../../../firebase";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setData(doc.data()?.Expense);
      doc.data()?.Expense.map((item) => {
        if (item.Type === "income") {
          setIncome((current) => [...current, item]);
        } else if (item.Type === "expense") {
          setExpense((current) => [...current, item]);
        }
      });

      // console.log(doc.data()?.Expense);
    });
  }, [user?.email]);

  return (
    <div className="w-full h-full flex gap-4 ">
      <div className=" w-[75%]">
        <ChartBox data={data} income={income} expense={expense} />

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
