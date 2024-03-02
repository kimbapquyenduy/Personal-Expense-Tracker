import { Card, List } from "antd";
import { doc, onSnapshot } from "firebase/firestore";
import { Badge, Rows3 } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthConext";
import { db } from "../firebase";
import DashListSkeleton from "./Skeleton/DashListSkeleton";

const DashList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [history, setHistory] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setHistory(doc.data()?.Expense);
      setIsLoading(false);
    });
  }, [user?.email]);
  console.log(history);
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
          <div className="text-sm ml-1">History</div>
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
          renderItem={(item) => {
            return (
              <List.Item>
                <List.Item.Meta
                  title={<div>{item.name}</div>}
                  description={<div>{item}</div>}
                />
              </List.Item>
            );
          }}
        ></List>
      )}
    </Card>
  );
};

export default DashList;
