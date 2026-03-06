

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="faq">FAQ</a>
      </li>
      <li>
        <a href="changelog">Changelog</a>
      </li>
      <li>
        <a href="blog">Blog</a>
      </li>
      <li>
        <a href="download">Download</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      </ul>
    </div>
    <a href="home" className=" text-xl">CS — Ticket System</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="flex gap-4  px-4">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="faq">FAQ</a>
      </li>
      <li>
        <a href="changelog">Changelog</a>
      </li>
      <li>
        <a href="blog">Blog</a>
      </li>
      <li>
        <a href="download">Download</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="">
    <a href="newTicket" className=" btn bg-linear-to-r from-purple-500 to-indigo-600 
text-white px-5 py-2 rounded-md 
flex items-center gap-2 
hover:opacity-90 transition">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg> 
    New Ticket
  </a>
  </div>
</div>
    </div>
  );
}

export default Navbar;