import React from "react";

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <button className="btn btn-outline-success" onClick={showModal}>
          {/* {" //по кліку на кнопку показуємо модалку "} */}
          Open modal
        </button>
      </div>
    </nav>
  );
};
export default Header;
