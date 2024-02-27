import { CircleDollarSign, HandCoins, Wallet } from "lucide-react";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="w-full h-full flex gap-4 ">
      <div className=" w-[70%]  pt-4">
        <div className="flex w-full h-[15%] justify-between">
          <div className="w-[30%] h-[100%] bg-white rounded-md justify-center">
            <div className="flex w-full h-full items-center  gap-3  ">
              <div className="   rounded-full p-3 cursor-pointer bg-blue-400/30 text-blue-600 text-sm  gap-x-4 ml-2 ">
                <Wallet size={20} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold text-gray-500 ">Total Money</div>
                <div className="text-xl font-semibold text-gray-700 ">
                  123456
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[100%] bg-white rounded-md justify-center">
            <div className="flex w-full h-full items-center  gap-3  ">
              <div className="   rounded-full p-3 cursor-pointer bg-green-400/30 text-green-600 text-sm  gap-x-4 ml-2 ">
                <Wallet size={20} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold text-gray-500 ">Income</div>
                <div className="text-xl font-semibold text-gray-700 ">
                  123456
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[100%] bg-white rounded-md justify-center">
            <div className="flex w-full h-full items-center  gap-3  ">
              <div className="   rounded-full p-3 cursor-pointer bg-red-400/30 text-red-600 text-sm  gap-x-4 ml-2 ">
                <Wallet size={20} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold text-gray-500 ">Expense</div>
                <div className="text-xl font-semibold text-gray-700 ">
                  123456
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[75%] bg-white mt-5"></div>
      </div>
      <div className="bg-orange-400 w-[30%]"></div>
    </div>
  );
};
