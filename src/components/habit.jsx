import React, { PureComponent } from "react";
import { BsPlusCircle, BsDashCircle, BsTrash } from "react-icons/bs";

class Habit extends PureComponent {
  componentDidMount() {
    console.log("습관이 추가되었습니다");
  }
  componentWillUnmount() {
    console.log("습관이 삭제되었습니다.");
  }
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habitName">{name}</span>
        <span className="habitCount">{count}</span>
        <button
          className="habitBtn habitIncrease"
          onClick={() => this.props.handleIncrement(this.props.habit)}
        >
          <BsPlusCircle />
        </button>
        <button
          className="habitBtn habitDecrease"
          onClick={() => this.props.handleDecrement(this.props.habit)}
          disabled={count === 0}
        >
          <BsDashCircle />
        </button>
        <button
          className="habitBtn habitDelete"
          onClick={() => this.props.handleDelete(this.props.habit)}
        >
          <BsTrash />
        </button>
      </li>
    );
  }
}

export default Habit;
