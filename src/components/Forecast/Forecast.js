import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import ForecastDay from "./ForecastCard/ForecastDay";

const Forecast = () => {
  const { forecast } = useSelector((store) => store.weather);
  return (
    <section className={styles.wrapper}>
      <h2>5 day</h2>
      <div className={`card ${styles.card}`}>
        {forecast.map((day, i) => {
          return <ForecastDay key={i} {...day} />;
        })}
      </div>
    </section>
  );
};

export default Forecast;
