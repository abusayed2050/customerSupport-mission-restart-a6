import React from 'react';

const TaskStatus = () => {
    return (
       
    <div>
      <h2 className="font-bold mb-4 text-lg">Task Status</h2>

      <div>
          <p className="font-medium">ticket.title</p>
          <button
            className="mt-3 bg-green-600 text-white px-3 py-1 rounded w-full"
          >
            Complete
          </button>
        </div>
      

      <h2 className="font-bold mt-8 mb-3 text-lg">Resolved Task</h2>

      
        <div className="bg-gray-200 p-3 rounded mb-2">
          ticket.title
        </div>
        </div>
    );
};

    
    
  


export default TaskStatus;