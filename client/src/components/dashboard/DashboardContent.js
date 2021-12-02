import DashboardCard from "./DashboardCard";

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

function handleNewClick() {
  alert("New clicked!");
}

function handleManageClick() {
  alert("Manage clicked!");
}

function DashboardContent() {
  return (
    <div className={styles.card_container}>
      {organizations.map((organization) => {
        return <DashboardCard data={organization} handleClick={handleManageClick} />;
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
  );
}

export default DashboardContent;
