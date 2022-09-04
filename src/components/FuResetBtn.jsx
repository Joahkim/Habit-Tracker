import React from "react";

const FuResetBtn = ({ habits, setHabits }) => {
  const resetCounts = () => {
    setHabits(
      habits.map((habit) => {
        habit.count = 0;
        return habit;
      })
    );
  };

  return <button onClick={resetCounts}>RESET</button>;
};

export default FuResetBtn;
