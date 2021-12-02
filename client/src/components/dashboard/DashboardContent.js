import DashboardCard from "./DashboardCard";
import styles from './DashboardContent.module.css'

function DashboardContent() {
  return (
    <div className={styles.card_container}>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  );
}

export default DashboardContent;
