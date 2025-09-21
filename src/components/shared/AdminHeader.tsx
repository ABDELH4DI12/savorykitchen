import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaBars, FaSignOutAlt, FaUser } from 'react-icons/fa';

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-800 transition-colors md:hidden"
        >
          <FaBars size={24} />
        </button>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <FaUser />
            <span className="hidden md:inline">{user?.username}</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <FaSignOutAlt />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
