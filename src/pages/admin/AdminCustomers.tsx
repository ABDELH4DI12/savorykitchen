import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUser, FaEnvelope, FaPhone, FaCalendar, FaShoppingBag } from 'react-icons/fa';
import { customers } from '../../data/demoData';

const AdminCustomers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Customers Management</h1>
        <p className="text-gray-600 mt-2">View and manage your customer base</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-orange-500">{customers.length}</p>
          <p className="text-sm text-gray-600 mt-2">+12% from last month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Customers</h3>
          <p className="text-3xl font-bold text-green-500">{Math.floor(customers.length * 0.8)}</p>
          <p className="text-sm text-gray-600 mt-2">Ordered in last 30 days</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Orders</h3>
          <p className="text-3xl font-bold text-blue-500">3.3</p>
          <p className="text-sm text-gray-600 mt-2">Per customer</p>
        </motion.div>
      </div>

      {/* Customers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <FaUser className="text-orange-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
                <p className="text-sm text-gray-600">Customer #{customer.id}</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2 text-gray-400" />
                {customer.email}
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-2 text-gray-400" />
                {customer.phone}
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendar className="mr-2 text-gray-400" />
                Joined: {customer.joinDate}
              </div>
              <div className="flex items-center text-gray-600">
                <FaShoppingBag className="mr-2 text-gray-400" />
                Total Orders: {customer.totalOrders}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between">
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                View Details
              </button>
              <button className="text-orange-500 hover:text-orange-700 text-sm font-medium">
                Send Email
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500 text-lg">No customers found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default AdminCustomers;
