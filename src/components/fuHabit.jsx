import React from "react";
import { BsPlusCircle, BsDashCircle, BsTrash } from "react-icons/bs";

const HabitFu = ({ habit, handleIncrement, handleDecrement, handleDelete }) => {
  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habitName">{name}</span>
      <span className="habitCount">{count}</span>
      <button
        className="habitBtn habitIncrease"
        onClick={() => handleIncrement(habit)}
      >
        <BsPlusCircle />
      </button>
      <button
        className="habitBtn habitDecrease"
        onClick={() => handleDecrement(habit)}
        disabled={count === 0}
      >
        <BsDashCircle />
      </button>
      <button
        className="habitBtn habitDelete"
        onClick={() => handleDelete(habit)}
      >
        <BsTrash />
      </button>
    </li>
  );
};

export default HabitFu;
