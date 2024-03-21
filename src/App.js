import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter/counter";
import Header from "./components/Header/header";
import Modal from "./components/Modal/modal";
import ToDoList from "./components/ToDoList/ToDoList";
import FormLogin from "./components/FormLogin/formLogin";
import LoginForm from "./components/FormLogin/loginForm";
import { nanoid } from "nanoid";
import FormTodo from "./components/formTodo/FormTodo";

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  getCreateUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        {/* <Counter /> */}

        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              getSubmit={this.getCreateUser}
              closeModal={this.closeModal}
            />
            {/* <LoginForm /> */}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
