import { FaUserAlt } from "react-icons/fa";
import { RiNotificationBadgeFill } from "react-icons/ri";
import SearchForm from "../SearchForm";

// Header component
export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <div className="w-full md:w-auto md:flex-grow md:mr-4">
        <SearchForm />
      </div>
      <div className="flex justify-center md:justify-end items-center bg-gray-300 text-custom-yellow mt-4 rounded-lg p-2 space-x-4 md:space-x-0 md:space-y-0">
        <div className="mr-4">
          <RiNotificationBadgeFill size={20} />
        </div>
        <div className="ml-4">
          <FaUserAlt size={20} />
        </div>
      </div>
    </div>
  );
}
