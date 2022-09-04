import React, { PureComponent } from "react";
import { IoLogoPlaystation } from "react-icons/io";
import "./nav.css";

class Nav extends PureComponent {
  render() {
    let totalCount = 0;

    this.props.habits.forEach((habit) => {
      totalCount += habit.count;
    });

    return (
      <nav className="navigation">
        <span className="navItems logo">
          <IoLogoPlaystation />
        </span>
        <span className="navItems title">Habit Tracker</span>
        <div className="navItems totalCount">{totalCount}</div>
      </nav>
    );
  }
}

export default Nav;
