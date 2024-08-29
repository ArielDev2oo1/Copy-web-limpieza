import React from "react";
import "../../assets/styles/index.css";
import ReactLogo from "../../assets/react.svg";

export default function NavBAR() {
  //const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-10 bg-sky-700">
      <div className="flex items-center justify-between p-4 mx-52">
        <div className="flex items-center">
          <img src={ReactLogo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex items-center  gap-10">
          <nav className="mt-2">
            <ul className="flex space-x-4 gap-5">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Pictures
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#"
            className="border border-black rounded-md p-2 ml-4 hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
