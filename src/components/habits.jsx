import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm handleAdd={this.props.handleAdd} />
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
        <button className="habitsReset" onClick={this.props.handleReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Habits;
