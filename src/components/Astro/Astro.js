import styles from "./Astro.module.scss";
import { Moon } from "lunarphase-js";
import { useSelector } from "react-redux";

const Astro = () => {
  const { daylightHours, daylightMins, sunrise, sunset, moonrise, moonset } =
    useSelector((store) => store.weather.astro);
  return (
    <section className={styles.wrapper}>
      <h2>Astronomical</h2>
      <div className={`card ${styles.card}`}>
        <div className={styles.column}>
          <h3 className={styles.heading}>SUN</h3>
          <span className={styles.icon}>☀️</span>
          <div className={styles.info}>
            <strong>Daylight</strong>
            {daylightHours === "-" ? (
              <span>Up all day</span>
            ) : (
              <span>{`${daylightHours} hr, ${daylightMins} min`}</span>
            )}
          </div>
          <div className={styles.info}>
            <span>
              <strong>Rise: </strong>
              {sunrise}
            </span>
            <span>
              <strong>Set: </strong>
              {sunset}
            </span>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>MOON</h3>
          <span className={styles.icon}>{Moon.lunarPhaseEmoji()}</span>
          <div className={styles.info}>
            <strong>Phase</strong>
            <span>{Moon.lunarPhase()}</span>
          </div>
          <div className={styles.info}>
            <span>
              <strong>Rise: </strong>
              {moonrise}
            </span>
            <span>
              <strong>Set: </strong>
              {moonset}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Astro;
