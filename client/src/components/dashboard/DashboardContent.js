import React from "react";

import Modal from "react-modal";
import DashboardCard from "./DashboardCard";
import DashboardForm from "./DashboardForm";

import styles from "./DashboardContent.module.css";

import orgImg from "../../assets/RWT-icon.svg";
import newOrgImg from "../../assets/add.svg";

const organizations = [
  {
    cardImg: orgImg,
    cardTitle: "Organization Title",
  },
  {
    cardImg: orgImg,
    cardTitle: "Organization Title",
  },
  {
    cardImg: orgImg,
    cardTitle: "Organization Title",
  },
  {
    cardImg: orgImg,
    cardTitle: "Organization Title",
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function DashboardContent() {
  function handleNewClick() {
    // Open modal
    openModal();
  }

  function handleManageClick() {
    alert("Manage clicked!");
  }

  const [isOpen, setIsOpen] = React.useState(false);
  let subtitle;

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
    <>
      <div className={styles.card_container}>
        {organizations.map((organization) => {
          return (
            <DashboardCard
              data={organization}
              handleClick={handleManageClick}
            />
          );
        })}

        <DashboardCard
          data={{
            cardImg: newOrgImg,
            cardTitle: "Add Organization",
            cardType: "new",
          }}
          handleClick={handleNewClick}
        />
      </div>

      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DashboardForm onClick={closeModal}/>
      </Modal>
    </>
  );
}

export default DashboardContent;
