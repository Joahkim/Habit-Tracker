import React, { useState } from "react";
import "./App.css";
import NavFu from "./components/fuNav";
import FuBody from "./components/FuBody";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "리액트다루기", count: 0 },
    { id: 2, name: "자바스크립트", count: 0 },
    { id: 3, name: "컴퓨터과학", count: 0 },
  ]);

  return (
    <>
      <NavFu habits={habits} />
      <FuBody habits={habits} setHabits={setHabits} />
    </>
  );
}

export default App;
