import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Details from "./components/Details";
import Astro from "./components/Astro/Astro";
import Spinner from "./components/Spinner";

function App() {
  const { isLoading, isError, error, location } = useSelector(
    (store) => store.weather
  );

  return (
    <div className={styles.wrapper}>
      <Search />
      {isLoading && (
        <div className={styles["spinner-wrapper"]}>
          <Spinner />
        </div>
      )}
      {isError && (
        <div className={styles.error}>
          <p>Something went wrong :(</p>
          <p>Try again.</p>
          <p>
            <strong>Error: </strong>
            {error}
          </p>
        </div>
      )}
      {!isLoading && location !== "" && !isError && (
        <main>
          <header>
            <h1>Showing weather for</h1>
            <span className={styles.location}>{location}</span>
          </header>
          <div className={styles.grid}>
            <Current />
            <Forecast />
            <Details />
            <Astro />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
