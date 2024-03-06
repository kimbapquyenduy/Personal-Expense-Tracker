import React, { useEffect, useState } from "react";
import { CircleDollarSign, HandCoins, Wallet } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { UserAuth } from "../../context/AuthConext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const ChartBox = () => {
  const [data, setData] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setData(doc.data()?.Expense);
      setIsLoading(false);
    });
  }, [user?.email]);
  const getTotalMoney = () => {
    let money = 0;
    data.map((data) => {
      if (data.Type === "income") {
        money += data.Money;
      } else {
        money -= data.Money;
      }
    });
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };
  const getTotalIncome = () => {
    let money = 0;
    data.map((data) => {
      if (data.Type === "income") {
        money += data.Money;
      }
    });
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };
  const getTotalExpense = () => {
    let money = 0;
    data.map((data) => {
      if (data.Type === "expense") {
        money += data.Money;
      }
    });
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="flex w-full h-[15%] justify-between">
      <div className="w-[32%] h-[100%] bg-white rounded-md ">
        <div className="flex w-full h-full items-center justify-evenly gap-3  ">
          <div className="   rounded-full p-3 cursor-pointer bg-blue-400/30 text-blue-600 text-sm  gap-x-4 ml-2 ">
            <Wallet size={20} />
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="font-bold text-gray-500 ">Total Money</div>
            <div className="text-xl font-bold text-gray-700 ">
              {getTotalMoney()}
            </div>
          </div>
          <div className="w-[35%] h-[60%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "none",
                    boxShadow:
                      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
                    borderRadius: "10%",
                  }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 60 }}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8EBDFB"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-[32%] h-[100%] bg-white rounded-md justify-center">
        <div className="flex w-full h-full items-center  gap-3  ">
          <div className="   rounded-full p-3 cursor-pointer bg-green-400/30 text-green-600 text-sm  gap-x-4 ml-2 ">
            <Wallet size={20} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-gray-500 ">Income</div>
            <div className="text-xl font-semibold text-gray-700 ">
              {getTotalIncome()}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[32%] h-[100%] bg-white rounded-md justify-center">
        <div className="flex w-full h-full items-center  gap-3  ">
          <div className="   rounded-full p-3 cursor-pointer bg-red-400/30 text-red-600 text-sm  gap-x-4 ml-2 ">
            <Wallet size={20} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-gray-500 ">Expense</div>
            <div className="text-xl font-semibold text-gray-700 ">
              {getTotalExpense()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
