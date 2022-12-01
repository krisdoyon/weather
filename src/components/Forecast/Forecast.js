import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import ForecastDay from "./ForecastCard/ForecastDay";

const Forecast = () => {
  const { forecast } = useSelector((store) => store.weather);
  return (
    <section className={styles.wrapper}>
      <h2>5 day</h2>
      <div className={`card ${styles.card}`}>
        <div className={styles.forecast}>
          {forecast.map((day, i) => {
            return <ForecastDay key={i} {...day} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Forecast;
