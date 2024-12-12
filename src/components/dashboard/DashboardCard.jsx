// src/components/DashboardCard.jsx

import React from "react";

/**
 * DashboardCard Component
 *
 * @param {Object} props - Component props
 * @param {React.Element} props.icon - Icon component to display
 * @param {string} props.title - Title of the card
 * @param {number|string} props.value - Value to display
 * @param {boolean} [props.loading=false] - Loading state
 * @param {string} [props.error=null] - Error message
 * @returns {JSX.Element}
 */
const DashboardCard = ({ icon, title, value, percentage = null, loading = false, error = null, color}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center">
      <div className="p-3 bg-blue-100 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-lg text-gray-500">{title}</p>
        {loading ? (
          <p className="text-lg font-bold text-gray-700">Cargando...</p>
        ) : error ? (
          <p className="text-lg font-bold text-red-500">{error}</p>
        ) : (
          <>
            <p className= {`text-lg font-bold text-${color}`}>{value} {percentage ? ` ó ${percentage}%` : ""}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
