import { Button, Empty } from "antd";
import React from "react";
import BarChartBox from "../chart/BarChartBox";
import ChartBox from "../chart/ChartBox";
import PieChartBox from "../chart/PieChartBox";

export const Dashboard = () => {
  return (
    <div className="w-full h-full flex gap-4 ">
      <div className=" w-[75%]">
        <ChartBox />
        <div className="w-full h-[75%] bg-white mt-5 flex">
          <BarChartBox />
          <PieChartBox />
        </div>
      </div>
      <div className="bg-white w-[25%]">
        <Empty>
          <Button>Create</Button>
        </Empty>
      </div>
    </div>
  );
};
