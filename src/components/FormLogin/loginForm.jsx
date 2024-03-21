import { Component } from "react";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target }) => {
    console.log("target.value :>> ", target.value);
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    return (
      <form>
        <div style={{ display: "flex" }}>
          {" "}
          <label>Email </label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>Password </label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="radio" />
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default LoginForm;
