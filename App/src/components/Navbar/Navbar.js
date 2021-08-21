import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links'>
        <a
          href='/'
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            margin: "5px",
            padding: "8px",
          }}>
          Home
        </a>
        {/* <a
          href='/Projects'
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            margin: "5px",
            padding: "8px",
          }}>
          Projects
        </a> */}
        {/* <a
          href='/Getstarted'
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "10px",
            padding: "8px",
          }}>
          Get Started
        </a> */}
        <a
          href='/Login'
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            margin: "5px",
            padding: "8px",
          }}>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
