import React from "react";
import Habit from "./fuHabit";

const FuHabits = ({
  habits,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  console.log("해비츠", habits);

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          habits={habit}
          key={habit.id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default FuHabits;
