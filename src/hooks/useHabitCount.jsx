import React, { useState } from "react";

const useHabitCount = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "리액트다루기", count: 0 },
    { id: 2, name: "자바스크립트", count: 0 },
    { id: 3, name: "컴퓨터과학", count: 0 },
  ]);

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
  return { habits, handleIncrement, handleDecrement, handleDelete };
};

export default useHabitCount;
