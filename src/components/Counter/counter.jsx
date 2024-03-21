import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };
  handleClickI = () =>
    //this.setState({ value: 1 });
    this.setState(
      (prevState) => {
        return { value: prevState.value + 1 };
      }
      //     завжди повертає об'єкт
    );

  handleClickU = () =>
    //синтаксис неявного ретьорну

    // {} - не треба тому що нічаго не повертаємо !!!!!!!

    this.setState((prev) => ({ value: prev.value - 1 }));

  render() {
    const { value } = this.state; //зробили деструктуризацію
    return (
      <div>
        <div className="card-body">
          <h2 className="card-title text-center fs-1">Counter</h2>
          <p className="card-text text-center " style={{ fontSize: "80px" }}>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={this.handleClickI}
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={this.handleClickU}
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
            </div>
            {value}
          </p>
        </div>
      </div>
    );
  }
}

// const Counter = () => {
//   return (
//     <div>
//       <div className="card-body">
//         <h2 className="card-title text-center fs-1">Counter</h2>
//         <p className="card-text text-center " style={{ fontSize: "80px" }}>
//           <div className="d-flex justify-content-center px-5">
//             <button
//               className="btn btn-outline-success me-5"
//               onClick={handleClick}
//             >
//               <i className="bi bi-plus-circle fs-1"></i>
//             </button>
//             <button
//               className="btn btn-outline-danger ms-5"
//               onClick={handleClick}
//             >
//               <i className="bi bi-plus-circle fs-1"></i>
//             </button>
//           </div>
//           {total}
//         </p>
//       </div>
//     </div>
//   );
// };

export default Counter;
