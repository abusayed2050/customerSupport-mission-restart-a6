import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            CS — Ticket System
          </h2>

          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="about" className="hover:text-white">About Us</a></li>
            <li><a href="mission" className="hover:text-white">Our Mission</a></li>
            <li><a href="sales" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="products" className="hover:text-white">Products & Services</a></li>
            <li><a href="stories" className="hover:text-white">Customer Stories</a></li>
            <li><a href="apps" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="join" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

      <div>
  <h3 class="text-white font-semibold mb-4">Social Links</h3>

  <ul class="space-y-3 text-sm">

    <li class="flex items-center gap-3 hover:text-white">
      <a href="twitter-cs-ticket-system">
      <i class="fa-brands fa-x-twitter"></i>
      <span>@CS — Ticket System</span>
      </a>
    </li>

    <li class="flex items-center gap-3 hover:text-white">
      <a href="linkedin-cs-ticket-system">
        <i class="fa-brands fa-linkedin"></i>
        <span>@CS — Ticket System</span>
      </a>
    </li>

    <li class="flex items-center gap-3 hover:text-white">
      <a href="facebook-cs-ticket-system">
        <i class="fa-brands fa-facebook"></i>
        <span>@CS — Ticket System</span>
      </a>
    </li>

    <li class="flex items-center gap-3 hover:text-white">
      <a href="email-cs-ticket-system">
        <i class="fa-solid fa-envelope"></i>
        <span>support@cst.com</span>
      </a>
    </li>

  </ul>
</div>

      </div>

      <div className="border-t border-gray-800 text-center py-5 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}



export default Footer;

