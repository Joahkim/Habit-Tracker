import React, { useRef, memo } from "react";

const FuAddList = memo(({ handleAdd }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const submitHabit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && handleAdd(name);
    formRef.current.reset();
  };

  return (
    <div>
      <form onClick={submitHabit} ref={formRef}>
        <input ref={inputRef} type="text" placeholder="Habits" />
        <button>Add</button>
      </form>
    </div>
  );
});

export default FuAddList;
