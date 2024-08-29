import React from "react";
import Logo from "../../assets/images/LOGO.png";

export default function Header() {
  return (
    <>
      <header className="bg-white  shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <img src={Logo} alt="" className="h-16" />
          </div>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6">
              <a href="" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
              <a href="" className="text-gray-800 hover:text-blue-500">
                About us
              </a>
              <a href="" className="text-gray-800 hover:text-blue-500">
                Pictures
              </a>
              <a href="" className="text-gray-800 hover:text-blue-500">
                Services
              </a>
            </nav>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
