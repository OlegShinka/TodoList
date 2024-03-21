import todo from "../../todo.json";
import { nanoid } from "nanoid";
import React, { Component, useEffect, useState } from "react";
import ToDo from "../ToDo/ToDo.jsx";
import FormTodo from "../formTodo/FormTodo.jsx";

export default class ToDoList extends Component {
  state = {
    todoList: "",
    isDelete: false,
    isCreate: false,
  };

  componentDidMount() {
    //при монтуванні якщо в лок сторі є щось воно запиш в ЛС
    if (localStorage.getItem("todo")) {
      this.setState({
        todoList: JSON.parse(localStorage.getItem("todo")),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList.length < this.state.todoList.length) {
      // при онов компонента оновиться і ЛС
      localStorage.setItem("todo", JSON.stringify(this.state.todoList));
      this.setState({
        isCreate: true,
      });
    }
    setTimeout(() => {
      this.setState({
        isCreate: false,
      });
    }, 1500);
    if (prevState.todoList.length > this.state.todoList.length) {
      localStorage.setItem("todo", JSON.stringify(this.state.todoList));
      this.setState({
        isDelete: true,
      });
    }
    setTimeout(() => {
      this.setState({
        isDelete: false,
      });
    }, 1500);
  }

  handleCheckCompleted = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  handleDelete = (id) => {
    this.setState((prev) => ({
      todoList: prev.todoList.filter((todo) => todo.id !== id),
    }));
  };

  addTodo = (value) => {
    this.setState((prev) => {
      return {
        todoList: [
          ...prev.todoList,
          { id: nanoid(), title: value, completed: false },
        ],
      };
    });
  };

  render() {
    return (
      <>
        {this.state.isDelete && (
          <div>
            <span>To-do DELETE</span>
          </div>
        )}
        {this.state.isCreate && (
          <div>
            <span>To-do CREATE</span>
          </div>
        )}
        <h1>My To-Do list</h1>
        <FormTodo getSubmitTodo={this.addTodo} />
        {this.state.todoList && (
          <ul className="list-group list-group-flush">
            {this.state.todoList.map((todo) => (
              <ToDo
                key={todo.id}
                todo={todo}
                handleCheckCompleted={this.handleCheckCompleted}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

// const ToDoList = () => {
//     const [todo, setToDo] = useState([])

//   return (
//     <>
//         <h1>My To-Do list</h1>
//         <ul className="list-group list-group-flush">
//           {this.state.todoList.map((todo) => (
//             <ToDo
//               key={todo.id}
//               todo={todo}
//               handleCheckCompleted={this.handleCheckCompleted}
//               handleDelete={this.handleDelete}
//             />
//           ))}
//         </ul>
//       </>
//     );
//   )
// }

// export default ToDoList
