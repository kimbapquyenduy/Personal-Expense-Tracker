import { Card, Divider, List, Skeleton } from "antd";
import { doc, onSnapshot } from "firebase/firestore";
import { Badge, Rows3 } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../../../context/AuthConext";
import { db } from "../../../firebase";
import DashListSkeleton from "../../Skeleton/DashListSkeleton";
import Addcompo from "./Addcompo";

const DashList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [history, setHistory] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setHistory(doc.data()?.Expense.reverse().slice(0, 5));
      setIsLoading(false);
    });
  }, [user?.email]);
  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{ padding: "8px 16px" }}
      bodyStyle={{ padding: "0 1rem" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Rows3 />
          <div className="flex justify-between w-full">
            <div className="text-sm ml-1">History</div>
            <div className="text-sm ml-1 underline cursor-pointer">
              See More
            </div>
          </div>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, index) => ({
            id: index,
          }))}
          renderItem={() => <DashListSkeleton />}
        />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={history}
          renderItem={(item, index) => {
            console.log(index);

            return (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          {item.Type == "expense" ? (
                            <div className="bg-red-400 w-[10px] h-[10px] text-[0.6rem] text-white rounded-full font-bold items-center justify-center flex mr-2"></div>
                          ) : (
                            <div className="bg-green-500  w-[10px] h-[10px] text-[0.6rem] text-white rounded-full font-bold items-center justify-center flex mr-2"></div>
                          )}
                          <div className="font-medium">{item.Datevalue}</div>
                        </div>
                        <div className="">
                          {item.Money.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>
                      <div className="font-semibold">{item.TOE} </div>
                    </div>
                  }
                  description={<div>{item.Note}</div>}
                />
              </List.Item>
            );
          }}
        ></List>
      )}

      <Addcompo />
    </Card>
  );
};

export default DashList;
