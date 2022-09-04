import React, { useState } from "react";
import "./app.css";
import HabitsFu from "./components/fuHabits";
import NavFu from "./components/fuNav";

function App() {
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
  return (
    <>
      <NavFu habits={habits} />
      <HabitsFu
        habits={habits}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
