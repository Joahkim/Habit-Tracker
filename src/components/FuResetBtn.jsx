import React from "react";

const FuResetBtn = ({ habits, setHabits }) => {
  const resetCounts = () => {
    const newHabits = habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    setHabits(newHabits);
  };

  return <button onClick={resetCounts}>RESET</button>;
};

export default FuResetBtn;
