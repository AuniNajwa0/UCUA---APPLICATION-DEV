import React from 'react';
import { FaCog, FaInfoCircle, FaPrint, FaSignOutAlt, FaTh } from 'react-icons/fa';
import { Link } from '@inertiajs/react';  // Inertia Link

function StateAdminSideBar() {
  return (
    <div className="fixed top-0 left-0 w-1/6 bg-gray-100 text-gray-800 h-screen p-4 border-r border-gray-300 flex flex-col">
      {/* Logo Section */}
      <div className="mb-2 text-center">
        <img src="/assets/LogoTVPSS.svg" alt="TVPSS Logo" className="w-[100] h-[100]" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-2 flex-1">
        <li className="flex items-center space-x-2 px-4 py-2 bg-[#455185] text-white rounded-md text-lg">
          <Link href="/dashboardState"> {/* Using Inertia Link */}
            <FaTh />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-lg">
          <Link href="/certificate-Template-List"> {/* Using Inertia Link */}
            <FaPrint />
            <span>Jana Sijil Pelajar</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-lg">
          <Link href="/schoolInfo"> {/* Using Inertia Link */}
            <FaInfoCircle />
            <span>Informasi TVPSS Sekolah</span>
          </Link>
        </li>
      </ul>

      {/* Bottom Items */}
      <div className="mt-2 space-y-4">
        <li className="flex items-center space-x-2 px-4 py-2 bg-[#455185] text-white hover:bg-blue-800 rounded-md text-lg">
          <FaCog />
          <span>Tetapan</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-lg">
          <FaSignOutAlt />
          <span>Log Keluar</span>
        </li>
      </div>
    </div>
  );
}

export default StateAdminSideBar;
