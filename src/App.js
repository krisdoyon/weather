import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import Current from "./components/Current";
import Forecast from "./components/Forecast/Forecast";
import Details from "./components/Details";
import Astro from "./components/Astro/Astro";

function App() {
  const { isLoading, isError, error, location } = useSelector(
    (store) => store.weather
  );

  return (
    <div className={styles.wrapper}>
      <Search />
      {isError && (
        <div className={styles.error}>
          <p>Something went wrong :(</p>
          <p>Try again.</p>
          <p>{`Error: ${error}`}</p>
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
