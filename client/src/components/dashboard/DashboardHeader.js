import mainImg from "../../assets/RWT-icon.svg";
import styles from "./DashboardHeader.module.css";

function DashboardHeader() {
  return (
    <header className={styles.header}>
      <img src={mainImg} alt="RWT icon" className={styles.header_image} />
      <h2 className={styles.header_title}>Ryan Wood Tech</h2>
    </header>
  );
}

export default DashboardHeader;
