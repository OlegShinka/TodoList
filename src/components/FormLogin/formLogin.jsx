import { Component } from "react";

class FormLogin extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
    gender: "male",
  };

  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
  }
  handleChange = (e) => {
    //  чз деструк витягли target з event
    //console.log("target :>> ", target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getSubmit({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    //  чистимо інпути
    this.setState({
      email: "",
      password: "",
    });
    //після submit закр модалку
    this.props.closeModal();
  };

  //   handleCheck = ({ target }) => {
  //     console.log("target.value :>> ", target.checked);
  //     this.setState({
  //       isChecked: target.checked,
  //     });
  //   };

  //рефакторинг чз забираємо target  чз глибоку деструктуризацію
  handleCheck = ({ target: { checked } }) => {
    console.log("e :>> ", checked);
    this.setState({
      isChecked: checked,
    });
  };

  handleGender = ({ target }) => {
    console.log("target.value :>> ", target.value);
    this.setState({
      gender: target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email" //додали атрибут для звернення до конкретного цього інпуту
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password" //додали атрибут для звернення до конкретного цього інпуту
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={this.handleCheck}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.isChecked}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="male"
            onChange={this.handleGender}
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={this.state.gender === "male"}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="female"
            onChange={this.handleGender}
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.gender === "female"}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>

        <button
          disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
