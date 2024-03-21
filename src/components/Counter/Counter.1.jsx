import React, { Component } from "react";

export class Counter extends Component {
  state = {
    value: 0,
  };
  handleClick = (e) => {
    //this.setState({ value: 1 });
    this.setState((prevState) => {
      return { value: prevState.value + 1 }; //     завжди повертає об'єкт
    });
  };
  render() {
    return (
      <div>
        <div className="card-body">
          <h2 className="card-title text-center fs-1">Counter</h2>
          <p className="card-text text-center " style={{ fontSize: "80px" }}>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={this.handleClick}
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={this.handleClick}
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
            </div>
            {this.state.value}
          </p>
        </div>
      </div>
    );
  }
}
