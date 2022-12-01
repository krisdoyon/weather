import styles from "./ForecastDay.module.scss";

const ForecastDay = ({ date, day, iconURL, label, min, max }) => {
  return (
    <article className={styles.wrapper}>
      <strong>{day}</strong>
      <span>{date}</span>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${iconURL}@2x.png`}
        alt={label}
      />
      <span>{label}</span>
      <span>{`${max} / ${min}`} &deg;F</span>
    </article>
  );
};

export default ForecastDay;
