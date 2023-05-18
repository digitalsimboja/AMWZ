// Sidebar component
import Link from "next/link";
import { FaHome, FaUserCog } from "react-icons/fa";
import { RiBarChart2Fill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="flex">
      <div className="fixed w-32 sm:w-40 h-screen p-4 flex flex-col items-center justify-between bg-custom-yellow overflow-y-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Link href="/">
              <div className="p-1 inline-block rounded-lg">
                <h1 className="text-center">Logo</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <FaHome size={30} className="text-white" />
              </div>
            </Link>
            <Link href="/performance">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <RiBarChart2Fill
                  size={30}
                  className="text-white transform rotate-y-180"
                />
              </div>
            </Link>
            <Link href="/users">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <FaUserCog size={30} className="text-white" />
              </div>
            </Link>
            <Link href="/settings">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <HiOutlineUserGroup size={30} className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className="ml-24 sm:ml-32 w-full z-10 bg-custom-gray h-screen overflow-hidden rounded-l-[40px] p-8">
        <div className="bg-custom-gray overflow-y-auto h-full">
          {props.children}
        </div>
      </main>
    </div>
  );
}
