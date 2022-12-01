import styles from "./SearchDropdown.module.scss";
import { useSelector } from "react-redux";
import SearchResult from "../SearchResult";

import Spinner from "../../Spinner";

const SearchDropdown = () => {
  const { isLoading, isDropdownOpen, results } = useSelector(
    (store) => store.search
  );

  return (
    <div
      className={`${styles.wrapper} ${isDropdownOpen ? styles.visible : ""}`}
    >
      {isLoading && (
        <div className={styles["spinner-wrapper"]}>
          <Spinner />
        </div>
      )}
      {!isLoading && results !== null && results?.length !== 0 && (
        <div className={styles.results}>
          {results.map((result) => {
            return <SearchResult key={result["place_id"]} {...result} />;
          })}
        </div>
      )}
      {!isLoading && results?.length === 0 && (
        <p className={styles["no-results"]}>
          No matching results. <br /> Please try again.
        </p>
      )}
    </div>
  );
};

export default SearchDropdown;
