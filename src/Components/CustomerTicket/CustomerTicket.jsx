import React from "react";
import { SlCalender } from "react-icons/sl";

const CustomerTicket = ({ ticket, handleCardClick }) => {
  const ticketData = ticket || {};
  const ticketId = ticketData.id;
  const ticketTitle = ticketData.title;
  const desc = ticketData.description;
  const customerName = ticketData.customer;
  const priorityLevel = ticketData.priority;
  const ticketStatus = ticketData.status;
  const createdDate = ticketData.createdAt;

  const handleClick = () => {
    if (handleCardClick) {
      handleCardClick(ticket);
    }
  };
  const getStatusStyles = () => {
    if (ticketStatus === "Open") {
      return {
        bg: "bg-[#B9F8CF]",
        dot: "bg-[#02A53B]"
      };
    } else {
      return {
        bg: "bg-[#F8F3B9]", 
        dot: "bg-[#FEBB0C]"
      };
    }
  };

  const statusStyles = getStatusStyles();
  const priorityColor = priorityLevel == "High Priority" ? "text-[#F83044]" : "text-[#FEBB0C]";

  return (
    <div 
      onClick={handleClick} 
      className="bg-white p-3 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-gray-800 truncate max-w-[60%]">
          {ticketTitle}
        </h2>
        
        <div className={`rounded-xl px-3 py-1 text-sm flex items-center ${statusStyles.bg}`}>
          <span className={`rounded-full h-2 w-2 inline-block mr-2 ${statusStyles.dot}`}></span>
          <span className="font-medium">{ticketStatus}</span>
        </div>
      </div>
      <div className="mb-3">
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {desc}
        </p>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-gray-600">#{ticketId}</span>
          <span className={`font-semibold uppercase ${priorityColor}`}>
            {priorityLevel}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-gray-600">{customerName}</span>
          <div className="flex items-center space-x-1">
            <SlCalender className="text-gray-400" size={14} />
            <span>{createdDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;