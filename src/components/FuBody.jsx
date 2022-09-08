import React from "react";
import FuHabits from "./fuHabits";
import FuAddList from "./FuAddList";
import FuResetBtn from "./FuResetBtn";

const FuBody = ({ habits, setHabits }) => {
  const handleIncrement = (habit) => {
    const newHabits = [...habits];
    const dataIndex = newHabits.indexOf(habit);
    newHabits[dataIndex].count++;
    setHabits(newHabits);
  };

  const handleDecrement = (habit) => {
    const newHabits = [...habits];
    const dataIndex = newHabits.indexOf(habit);
    newHabits[dataIndex].count--;
    setHabits(newHabits);
  };

  const handleDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(newHabits);
  };

  console.log("바디", habits);

  return (
    <>
      <FuAddList habits={habits} setHabits={setHabits} />
      <FuHabits
        habits={habits}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
      <FuResetBtn habits={habits} setHabits={setHabits} />
    </>
  );
};

export default FuBody;
