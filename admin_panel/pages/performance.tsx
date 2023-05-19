import React, { useState } from "react";
import Header from "../components/Header";
import { FiChevronDown } from "react-icons/fi";
import { Performance } from "../lib/data/performance/performance";
import { data } from "../lib/data/performance/perforrmanceData";
interface PerformanceProps {
  data: Performance
}

export default function Performance() {
  const perfomanceData = data;

  const [metrics, setMetrics] = useState(perfomanceData)

  console.log(metrics)
  return (
    <>
      <Header />
      <div className="overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Performance Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:ml-8 md:mr-24 ">
          <div className="bg-custom-yellow text-white p-4 shadow-md rounded-3xl flex flex-col items-center justify-center md:h-48 h-36 ">
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
            <h2 className="text-xl font-bold text-gray-300">Revenue</h2>
          </div>
        </div>

        <div className="border-8 border-custom-yellow rounded-3xl p-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4  mb-8 ">
            <div className="col-span-1 md:col-span-3 bg-custom-gray">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-4 border-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent flex-1 text-sm w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-2 bg-custom-gray relative">
              <input
                type="text"
                placeholder="Filter By"
                className="py-2 px-4 border-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent flex-1 text-sm w-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 bg-custom-gray">
              <input
                type="text"
                placeholder="Export as"
                className="py-2 px-4 border-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent flex-1 text-sm w-full"
              />
            </div>
          </div>
          <div className="p-4 ">
          <div className="w-full m-auto  overflow-y-auto bg-gray-400">
              <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span className="text-center">Subscription</span>
                <span className="text-center">Property</span>
                <span className="hidden sm:overflow-x-auto  md:grid text-center">Amenities</span>
                <span className="hidden sm:overflow-x-auto  sm:grid text-center">City</span>
                <span className="hidden sm:overflow-x-auto  md:grid text-center">State</span>
                <span className="hidden sm:overflow-x-auto  md:grid text-center">Zipcode</span>
                <span className="hidden sm:overflow-x-auto  md:grid text-center">Date</span>
              </div>
            </div>
            <ul className="p-4">
              {metrics.map((metric) => (
                <li
                  key={metric.id}
                  className="hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <p className="text-center">{metric.subscription}</p>
                  <p className="text-center">{metric.property}</p>
                  <p className="hidden sm:overflow-x-auto  md:block text-center">{metric.amenities}</p>
                  <p className="hidden sm:overflow-x-auto sm:block text-center">{metric.city}</p>
                  <p className="hidden sm:overflow-x-auto  md:block text-center">{metric.state}</p>
                  <p className="hidden sm:overflow-x-auto md:block text-center">{metric.zipcode}</p>
                  <p className="hidden sm:overflow-x-auto  md:block text-center">{metric.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
