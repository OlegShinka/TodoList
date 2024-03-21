import { Component } from "react";

class Modal extends Component {
  state = {
    isShowModal: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handlePressEsc);
  }
  handlePressEsc = (e) => {
    console.log("e :>> ", e);
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  //чистимо слухача   при закритті модалки
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressEsc);
  }
  render() {
    const { closeModal, children } = this.props;
    return (
      <div
        className="modal fade show"
        style={{ display: "block", backdropFilter: "blur(5px)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Modal window</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
