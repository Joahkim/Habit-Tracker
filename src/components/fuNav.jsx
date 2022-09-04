import React from "react";
import { IoLogoPlaystation } from "react-icons/io";
import "./fuNav.css";

const NavFu = ({ habits }) => {
  let totalCount = 0;

  habits.forEach((habit) => {
    totalCount += habit.count;
  });

  return (
    <>
      <nav className="navigation">
        <span className="navItems logo">
          <IoLogoPlaystation />
        </span>
        <span className="navItems title">Habit Tracker</span>
        <div className="navItems totalCount">{totalCount}</div>
      </nav>
    </>
  );
};

export default NavFu;
