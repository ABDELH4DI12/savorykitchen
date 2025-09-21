import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChartLine,
  FaShoppingCart,
  FaUtensils,
  FaUsers,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

interface AdminSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: FaChartLine },
    { path: '/admin/orders', label: 'Orders', icon: FaShoppingCart },
    { path: '/admin/menu', label: 'Menu', icon: FaUtensils },
    { path: '/admin/customers', label: 'Customers', icon: FaUsers },
    { path: '/admin/settings', label: 'Settings', icon: FaCog },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className={`flex items-center ${!isOpen && 'justify-center'}`}>
          <span className={`text-2xl font-bold text-orange-500 ${!isOpen && 'hidden'}`}>
            Admin Panel
          </span>
          {!isOpen && <span className="text-2xl font-bold text-orange-500">A</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 transition-colors duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <Icon className={`${isOpen ? 'mr-3' : 'mx-auto'} text-xl`} />
              {isOpen && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
