import orgImg from "../../assets/RWT-icon.svg";
import styles from "./DashboardCard.module.css";

function DashboardCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <img className={styles.card_img} src={orgImg} alt="RWT Icon" />
        <h3 className={styles.card_title}>Orginzation Title</h3>
      </div>
      <button className={styles.card_btn}>Manage</button>
    </div>
  );
}

export default DashboardCard;
