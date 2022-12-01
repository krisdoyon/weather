import styles from "./Current.module.scss";
import { useSelector } from "react-redux";

const Current = () => {
  const {
    todayDisplay,
    current: { iconURL, label, min, max, temp, feelsLike },
  } = useSelector((store) => store.weather);

  return (
    <div className={styles.wrapper}>
      <h2>
        Today, <span className={styles.today}>{todayDisplay}</span>
      </h2>

      <div className={`card ${styles.card}`}>
        <div className={styles.column}>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${iconURL}@2x.png`}
            alt="weather-icon"
          />
          <span>{label}</span>
          <span>{`${min} / ${max}`} &deg;F</span>
        </div>
        <div className={styles.column}>
          <span className={styles.temp}>
            {temp}
            <span className={styles.unit}> &deg;F</span>
          </span>
          <span>{`Feels like: ${feelsLike}`} &deg;F</span>
        </div>
      </div>
    </div>
  );
};

export default Current;
