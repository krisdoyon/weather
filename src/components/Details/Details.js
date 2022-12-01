import { useSelector } from "react-redux";
import styles from "./Details.module.scss";
import {
  MdOutlineWaterDrop,
  MdAir,
  MdOutlineCloud,
  MdOutlineVisibility,
  MdOutlineCompress,
} from "react-icons/md";
import { BsCloudRain } from "react-icons/bs";

const Details = () => {
  const { humidity, wind, clouds, precipitation, visibility, pressure } =
    useSelector((store) => store.weather.details);

  return (
    <section className={styles.wrapper}>
      <h2>DETAILS</h2>
      <div className={`card ${styles.card}`}>
        <div className={styles.detail}>
          <MdOutlineWaterDrop className={styles.icon} />
          <div className={styles.label}>humitidy</div>
          <div className={styles.value}>{`${humidity}%`}</div>
        </div>
        <div className={styles.detail}>
          <MdAir className={styles.icon} />
          <div className={styles.label}>wind</div>
          <div className={styles.value}>{`${wind} mph`}</div>
        </div>
        <div className={styles.detail}>
          <MdOutlineCloud className={styles.icon} />
          <div className={styles.label}>cloud cover</div>
          <div className={styles.value}>{`${clouds}%`}</div>
        </div>
        <div className={styles.detail}>
          <BsCloudRain className={styles.icon} />
          <div className={styles.label}>precipitation</div>
          <div className={styles.value}>{`${precipitation} in`}</div>
        </div>
        <div className={styles.detail}>
          <MdOutlineVisibility className={styles.icon} />
          <div className={styles.label}>visibility</div>
          <div className={styles.value}>{`${visibility} mi`}</div>
        </div>
        <div className={styles.detail}>
          <MdOutlineCompress className={styles.icon} />
          <div className={styles.label}>pressure</div>
          <div className={styles.value}>{`${pressure} in`}</div>
        </div>
      </div>
    </section>
  );
};

export default Details;
