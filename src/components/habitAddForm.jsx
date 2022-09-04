import React, { PureComponent } from "react";
import "./habitAddForm.css";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  //돔 요소에 직접 접근하는 것이 아니라 createRef를 사용해 변수를 정의하고 그것을 해당하는 리액트 컴포넌트의  ref로 연결하면 된다.

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name);
    this.inputRef.current.value = "";
    //this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="addForm" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="addInput"
          placeholder="habit"
        />
        <button className="addBtn">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
