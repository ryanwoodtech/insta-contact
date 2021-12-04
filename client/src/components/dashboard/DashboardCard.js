import styles from "./DashboardCard.module.css";

function DashboardCard(props) {
  if (props.data.cardType === "new") {
    return (
      <div className={styles.card}>
        <div className={styles.card_content}>
          <h3 className={styles.card_title_new}>{props.data.cardTitle}</h3>
          <img
            className={styles.card_img}
            src={props.data.cardImg}
            alt="RWT Icon"
            onClick={props.handleClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <img
          className={styles.card_img}
          src={props.data.cardImg}
          alt="RWT Icon"
        />
        <h3 className={styles.card_title}>{props.data.cardTitle}</h3>
      </div>
      <button onClick={props.handleClick} className={styles.card_btn}>
        Manage
      </button>
    </div>
  );
}

export default DashboardCard;
