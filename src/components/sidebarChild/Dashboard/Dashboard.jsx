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
import AreraChart from "../../chart/AreraChartBox";
import AreraChartBox from "../../chart/AreraChartBox";
export const Dashboard = () => {
  const [data, setData] = useState([]);

  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setData(doc.data()?.Expense);
    });
  }, [user?.email]);

  const getMonthlyMoney = (type) => {
    let monthArray = [
      {
        month:
          "01/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "02/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "03/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "04/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "05/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "06/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "07/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "08/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "09/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "10/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "11/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
      {
        month:
          "12/" +
          new Date().toLocaleString("en-GB", {
            year: "numeric",
          }),
        money: 0,
        Type: "",
      },
    ];
    console.log(monthArray);
    if (type == "income") {
      data.map((item) => {
        monthArray.map((monthValue) => {
          if (
            item.Datevalue.slice(3) == monthValue.month &&
            item.Type == type
          ) {
            monthValue.money += item.Money;
            monthValue.Type = item.TOE;
          }
        });
      });
    } else if (type == "expense") {
      data.map((item) => {
        monthArray.map((monthValue) => {
          if (
            item.Datevalue.slice(3) == monthValue.month &&
            item.Type == type
          ) {
            monthValue.money += item.Money;
            monthValue.Type = item.TOE;
          }
        });
      });
    }

    return monthArray;
  };
  const getThisMonthTOE = () => {
    const thisMonthTOEArray = [];
    data.map((item, index) => {
      if (
        item?.Datevalue.slice(3) ==
          new Date().toLocaleString("en-GB", {
            month: "2-digit",
            year: "numeric",
          }) &&
        item?.Type === "expense"
      ) {
        if (
          thisMonthTOEArray.some(function (el) {
            return el.TOE === item?.TOE;
          })
        ) {
          console.log(thisMonthTOEArray);
          // thisMonthTOEArray[index].Money += item?.Money;
          thisMonthTOEArray.map((TOEItem) => {
            if (TOEItem.TOE === item?.TOE) {
              TOEItem.Money += item?.Money;
            }
          });
        } else {
          thisMonthTOEArray.push({
            TOE: item?.TOE,
            Money: item?.Money,
          });
        }
      }
    });
    // console.log(thisMonthTOEArray);
    return thisMonthTOEArray;
  };
  return (
    <div className="w-full h-full flex gap-4 ">
      <div className=" w-[75%]">
        <ChartBox data={data} getMonthlyMoney={getMonthlyMoney} />

        <div className="w-full bg-white flex rounded">
          <AreraChartBox />
        </div>
        <div className="w-full h-[75%] bg-white mt-12 flex rounded">
          <BarChartBox />
          <PieChartBox getThisMonthTOE={getThisMonthTOE} />
        </div>
      </div>
      <div className=" w-[25%]">
        <DashList />
      </div>
    </div>
  );
};
