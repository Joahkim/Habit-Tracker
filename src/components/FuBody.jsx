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

  const handleAdd = (name) => {
    const added = [{ id: Date.now(), name, count: 0 }, ...habits];
    setHabits(added);
  };

  return (
    <>
      <FuAddList habits={habits} setHabits={setHabits} handleAdd={handleAdd} />
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
