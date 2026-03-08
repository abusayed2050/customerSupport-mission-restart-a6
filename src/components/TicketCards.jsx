import React from 'react';

const TicketCards = ({ticket, handleStartTask}) => {
   

    return (
        
          
    <div>   
        

        <div onClick={() => handleStartTask(ticket.id)} className="bg-white shadow rounded-xl p-5 border">
      <div className="flex justify-between">
        <h3 className="font-semibold">{ticket.title}</h3>
        <span className={`px-3 py-1 text-sm rounded-full 
          ${ticket.status === "Open"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
          } `}>
          {ticket.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-3">
        {ticket.description}  
      </p>

      <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
        <span>#{ticket.id}</span>
        <span className={`font-medium px-3 py-1 
          ${ticket.priority === "High"
            ? "text-red-800" 
            : ticket.priority === "Medium"
            ? " text-yellow-800"
            : " text-green-800"
          } `}>
          {ticket.priority} PRIORITY     
        </span>
        <span>{ticket.customer}</span>
        <span>{ticket.createdAt}</span>
      </div>

        </div>
    </div>
    );
};

export default TicketCards;