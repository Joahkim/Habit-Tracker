import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
