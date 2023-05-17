import Link from "next/link";
import { FaHome, FaUserCog } from "react-icons/fa";
import { RiBarChart2Fill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="relative flex">
      <div className="fixed w-60 h-screen p-4 flex flex-col justify-between bg-custom-yellow">
        <div className="flex flex-col items-center mr-16">
          <div className="mb-8">
            <Link href="/">
              <div className="p-1 inline-block rounded-lg">
                <h1 className="text-center">Logo</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/settings">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <FaHome size={30} className="text-white" />
              </div>
            </Link>
            <Link href="/stats">
              <div className="bg-custom-yellow hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                <RiBarChart2Fill
                  size={30}
                  className="text-white transform rotate-y-180"
                />
              </div>
            </Link>
            <Link href="/settings">
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
      <main className="ml-40 absolute left-0 top-0 z-10 w-full bg-white rounded-l-[40px]">
        {props.children}
      </main>
    </div>
  );
}
