import styles from "./Spinner.module.scss";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return <FaSpinner className={styles.spinner} />;
};

export default Spinner;
