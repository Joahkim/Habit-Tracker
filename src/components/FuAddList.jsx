import React, { useRef } from "react";

const FuAddList = ({ habits, setHabits }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const submitHabit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && handleAdd(name);
    formRef.current.reset();
  };

  const handleAdd = (name) => {
    const added = [{ id: Date.now(), name, count: 0 }, ...habits];
    setHabits(added);
  };

  return (
    <div>
      <form onClick={submitHabit} ref={formRef}>
        <input ref={inputRef} type="text" placeholder="Habits" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default FuAddList;
