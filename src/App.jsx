import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TaskStatus from './components/TaskStatus';
import TicketCards from './components/TicketCards';
import ticketData from './data/tickets.json'; 
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[ticket, setTicket] = useState(ticketData);
  const[inProgress, setInProgress] = useState([]);
  const[resolved, setResolved] = useState([]);

   const handleStartTask = (ticketId) => {
    const selectedTicket = ticket.find((ticket) => ticket.id === ticketId);
    if (selectedTicket) {
      setInProgress([...inProgress, selectedTicket]);
      setTicket(ticket.filter((t) => t.id !== ticketId));
      toast.success(`Started task: ${selectedTicket.title}`);
    }
  };

   const handleCompleteTask = (ticketId) => {
    const selectedTicket = inProgress.find((ticket) => ticket.id === ticketId);
    if (selectedTicket) {
      setResolved([...resolved, selectedTicket]);
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
      toast.success(`Completed task: ${selectedTicket.title}`);
    }
  };      


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4">
          <div>
              <Banner inProgress={inProgress.length} resolved={resolved.length} />
          </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
                {ticket.map((ticket) => (
                  <TicketCards key={ticket.id} ticket={ticket} handleStartTask={handleStartTask} />
                ))}
              </div>
          </div>
          <div>
            <TaskStatus
            inProgress={inProgress}
            resolved={resolved}
            handleCompleteTask={handleCompleteTask} 
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer/>
      
     
    </>
  )
}

export default App
