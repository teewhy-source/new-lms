import React, { Component } from "react";
import sail from "./images/sail_image-removebg-preview.png";
import { Link } from "react-router-dom";

export default class Taiyeheader extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header className="bg-[white] shadow-xl">
        <nav className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-xl font-bold mb-4 md:mb-0 flex items-center">
            <img src={sail} alt="" className="h-[4rem] md:h-[5rem] rounded-full" />
            <h1 className="text-[#08538c] ml-2">SAILEARN</h1>
          </div>
          <div className="space-y-2 md:space-y-0 md:space-x-4">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li className="text-[#333983]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[#333983]">
                <Link to="/coursespage">Courses</Link>
              </li>
              <li className="text-[#333983]">
                <Link to="/Contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-white pr-4 md:pr-0 flex items-center">
            <button className="bg-[white] px-2 py-1 rounded mr-2 cursor-pointer text-[#0769b2]">
              <Link to="/LogIn">Login</Link>
            </button>
            <button className="bg-[white] px-2 py-1 rounded cursor-pointer text-[#0769b2]">
              <Link to="/SignUpForm">Register</Link>
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
