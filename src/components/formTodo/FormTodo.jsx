import { Component } from "react";

class FormTodo extends Component {
  state = {
    todo: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getSubmitTodo(this.state.todo);

    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add TODO</label>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        ></input>
        <button type="submit" onClick={this.handleSubmit}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default FormTodo;
