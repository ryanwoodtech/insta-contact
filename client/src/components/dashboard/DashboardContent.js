import React, { useState } from "react";

import Modal from "react-modal";
import DashboardCard from "./DashboardCard";
import DashboardForm from "./DashboardForm";

import styles from "./DashboardContent.module.css";

import orgImg from "../../assets/RWT-icon.svg";
import newOrgImg from "../../assets/add.svg";

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

function DashboardContent() {
  const [organizations, setOrganizations] = useState([
    {
      cardImg: orgImg,
      cardTitle: "Organization Title",
    },
  ]);

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

  function addOrganization(newOrganizationTemp) {
    setOrganizations(prev => prev.concat(newOrganizationTemp))
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
        <DashboardForm onClick={closeModal} addOrganization={addOrganization} />
      </Modal>
    </>
  );
}

export default DashboardContent;
