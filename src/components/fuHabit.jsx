import React from "react";
import { BsPlusCircle, BsDashCircle, BsTrash } from "react-icons/bs";

const HabitFu = ({
  habits,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  const { name, count } = habits;
  console.log("해빗", habits);

  return (
    <li className="habit">
      <span className="habitName">{name}</span>
      <span className="habitCount">{count}</span>
      <button
        className="habitBtn habitIncrease"
        onClick={() => handleIncrement(habits)}
      >
        <BsPlusCircle />
      </button>
      <button
        className="habitBtn habitDecrease"
        onClick={() => handleDecrement(habits)}
        disabled={count === 0}
      >
        <BsDashCircle />
      </button>
      <button
        className="habitBtn habitDelete"
        onClick={() => handleDelete(habits)}
      >
        <BsTrash />
      </button>
    </li>
  );
};

export default HabitFu;
