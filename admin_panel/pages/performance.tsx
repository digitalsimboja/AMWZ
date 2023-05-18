import React from "react";
import Header from "../components/Header";

export default function Performance() {
  return (
    <>
      <Header />
      <div className="overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Performance Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:ml-8 md:mr-24">
          <div className="bg-custom-yellow text-white p-4 shadow-md rounded-3xl flex flex-col items-center justify-center md:h-48 h-36">
            <h2 className="text-xl font-bold">New Properties Added</h2>
            <p className="text-xl font-bold">04</p>
          </div>

          <div className="bg-gray-200 p-4 shadow-md rounded-3xl flex justify-center items-center h-36">
            <h2 className="text-xl font-bold text-gray-300">
              Utilization Metrics
            </h2>
          </div>
          <div className="bg-gray-200 p-4 shadow-md rounded-3xl flex justify-center items-center h-36">
            <h2 className="text-xl font-bold text-gray-300">
              No. of New Properties
            </h2>
          </div>
          <div className="bg-gray-200 p-4 shadow-md rounded-3xl flex justify-center items-center h-36">
            <h2 className="text-xl font-bold text-gray-300">
              Revenue
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
