import React from "react";

export default function MetricCard() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-custom-yellow">$8,568</p>
          <p className="text-blue-500">Daily Revenue</p>
        </div>
        <p className="bg-custom-gray flex justify-center items-center p-2 rounded-lg">
          <span className="text-lg text-custom-yellow">18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-custom-yellow">$2,768</p>
          <p className="text-blue-500">YTD Revenue</p>
        </div>
        <p className="bg-custom-gray flex justify-center items-center p-2 rounded-lg">
          <span className="text-lg text-custom-yellow">12%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-custom-yellow">10,465</p>
          <p className="text-blue-500">Users</p>         
        </div>
        <p className="bg-custom-gray flex justify-center items-center p-2 rounded-lg">
          <span className="text-lg text-custom-yellow">23%</span>
        </p>

      </div>
    </div>
  );
}
