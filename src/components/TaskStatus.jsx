import React from 'react';

const TaskStatus = ({ inProgress, resolved, handleCompleteTask }) => {
   
    return (
       
    <div>
      <h2 className="font-bold mb-4 text-lg">Task Status</h2>

          {inProgress.map((ticket) => (
            <div className="bg-blue-200 p-3 rounded mb-2" key={ticket.id}>
              <p className="font-medium">{ticket.title}</p>
              <button
                onClick={() => handleCompleteTask(ticket.id)}
                className="mt-3 bg-green-600 text-white px-3 py-1 rounded w-full"  
              >   
                Complete
              </button>
            </div>
          ))}

      <h2 className="font-bold mt-8 mb-3 text-lg">Resolved Task</h2>

      
          {resolved.map((ticket) => (
            <div className="bg-green-200 p-3 rounded mb-2" key={ticket.id}>
              <p className="font-medium">{ticket.title}</p>
            </div>
          ))}
        </div>
    );
};

    
    
  


export default TaskStatus;