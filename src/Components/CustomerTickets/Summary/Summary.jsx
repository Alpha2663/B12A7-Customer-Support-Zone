import React from "react";
import { toast } from "react-toastify";

const Summary = (props) => {
  const ticket = props.ticket;
  const summary = props.summary;
  const setSummary = props.setSummary;
  const resolvedCount = props.resolvedCount;
  const setResolvedCount = props.setResolvedCount;
  const progressCount = props.progressCount;
  const setProgressCount = props.setProgressCount;
  const setCompletedTicketIds = props.setCompletedTicketIds;
  const setResolved = props.setResolved;

  const handleComplete = () => {
    toast.success("Ticket completed!");
  
    const newResolvedCount = resolvedCount + 1;
    const newProgressCount = progressCount - 1;
    
    setResolvedCount(newResolvedCount);
    setProgressCount(newProgressCount);
    
    const updatedSummary = summary.filter(item => {
      return item.id !== ticket.id;
    });
    setSummary(updatedSummary);
    
    setCompletedTicketIds(prevIds => {
      return [...prevIds, ticket.id];
    });
 
    setResolved(prevResolved => {
      return [...prevResolved, ticket];
    });
  };

  return (
    <div className="summary-card bg-white p-4 rounded border border-gray-200 shadow-sm mb-3">
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
        {ticket?.title || "Untitled Ticket"}
      </h3>
      
      <button
        onClick={handleComplete}
        className="complete-btn w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Mark as Complete
      </button>
    </div>
  );
};

export default Summary;