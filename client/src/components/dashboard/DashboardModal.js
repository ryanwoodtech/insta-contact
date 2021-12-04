import React from "react";
import { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function DashboardModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  let subtitle = '';

  useEffect(() => {
    openModal();
  }, [])


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {console.log(isOpen)}
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
        HHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloello
      </h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
}

export default DashboardModal;
