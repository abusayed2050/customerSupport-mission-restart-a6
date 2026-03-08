import React from 'react';

const TicketCards = () => {
    return (
        
          
    <div>   
        <h2 className="font-bold mt-8 mb-3 text-lg">Customer Tickets</h2>

        <div className="bg-white shadow rounded-xl p-5 border">
      <div className="flex justify-between">
        <h3 className="font-semibold">ticket.title</h3>
        <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
          ticket.status
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-3">
        ticket.description
      </p>

      <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
        <span>#ticket.id</span>
        <span>ticket.customer</span>
        <span>ticket.createdAt</span>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Start Task
      </button>
    
        </div>
    </div>
    );
};

export default TicketCards;