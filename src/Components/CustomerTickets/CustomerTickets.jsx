import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import Summary from "./Summary/Summary";
import { toast } from "react-toastify";
import Resolved from "./Resolved";

const CustomerTickets = (props) => {
 
  const ticketsPromise = props.ticketsPromise;
  const summary = props.summary;
  const setSummary = props.setSummary;
  const progressCount = props.progressCount;
  const setProgressCount = props.setProgressCount;
  const resolvedCount = props.resolvedCount;
  const setResolvedCount = props.setResolvedCount;
  const resolved = props.resolved;
  const setResolved = props.setResolved;

  const customerTickets = use(ticketsPromise);
  const [completedIds, setCompletedIds] = useState([]);

  const handleTicketClick = (clickedTicket) => {
   
    const existingTicket = customerTickets.find(t => t.id === clickedTicket.id);
    
    if (existingTicket) {
      const alreadyInSummary = summary.some(item => item.id === clickedTicket.id);
      if (!alreadyInSummary) {
        const updatedSummary = [...summary, existingTicket];
        setSummary(updatedSummary);
        
        setProgressCount(prev => prev + 1);
        
        toast.success("Ticket added to tasks!");
      } else {
        toast.info("Ticket already in progress");
      }
    }
  };
  const activeTickets = customerTickets.filter(ticket => {
    return !completedIds.includes(ticket.id);
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Customer Tickets</h2>
              <p className="text-gray-600 text-sm mt-1">
                {activeTickets.length} active tickets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTickets.length > 0 ? (
                activeTickets.map(ticket => (
                  <CustomerTicket
                    key={ticket.id}
                    ticket={ticket}
                    handleCardClick={handleTicketClick}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-8 text-gray-500">
                  No active tickets available
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-3 text-gray-800">Task Status</h2>
              
              {summary.length === 0 ? (
                <div className="text-gray-500 text-sm italic py-4 text-center">
                  Select a ticket to add to Task Status
                </div>
              ) : (
                <div className="space-y-3">
                  {summary.map(ticket => (
                    <Summary
                      key={ticket.id}
                      ticket={ticket}
                      summary={summary}
                      setSummary={setSummary}
                      progressCount={progressCount}
                      setProgressCount={setProgressCount}
                      resolvedCount={resolvedCount}
                      setResolvedCount={setResolvedCount}
                      setCompletedTicketIds={setCompletedIds}
                      setResolved={setResolved}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-3 text-gray-800">Resolved Tasks</h2>
              
              {resolved.length === 0 ? (
                <div className="text-gray-500 text-sm italic py-4 text-center">
                  No resolved tasks yet
                </div>
              ) : (
                <div className="space-y-3">
                  {resolved.map((item, idx) => (
                    <Resolved
                      key={idx}
                      element={item}
                      resolved={resolved}
                      setResolved={setResolved}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;