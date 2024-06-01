import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-[40px] mx-[120px] text-white">
      <div className="font-poppins text-[40px] font-medium logo-hover-effect">
        EV-olution
      </div>
      <ul className="flex items-center list-none text-[18px] gap-[90px]">
        <li className="nav-item-hover-effect">Home</li>
        <li className="nav-item-hover-effect">Explore</li>
        <li className="nav-item-hover-effect">About</li>
        <li className="rounded-[50px] px-[38px] py-[10px] bg-white text-black contact-hover-effect">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
