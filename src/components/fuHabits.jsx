import React from "react";
import Habit from "./fuHabit";

const HabitsFu = ({
  habits,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          habit={habit}
          key={habit.id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default HabitsFu;
