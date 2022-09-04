import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import Nav from "./components/nav";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  // handleIncrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   habits[index].count++;
  //   this.setState({ habits });
  // };
  // handleDecrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   habits[index].count--;
  //   this.setState({ habits });
  // };
  // handleReset = () => {
  //   const habits = this.state.habits.map((habit) => {
  //     habit.count = 0
  //     return habit;
  //    });
  //   this.setState({ habits });
  // };

  //Habit.jsx에 purecomponent를 사용했을 때  주소값은 같지만 변화한 count값을 따로 명시해서 얕은 복사 진행하기
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      { id: Date.now(), name: name, count: 0 },
      ...this.state.habits,
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav habits={this.state.habits} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
