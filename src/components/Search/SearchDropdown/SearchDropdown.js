import styles from "./SearchDropdown.module.scss";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchResult from "../SearchResult";
import { useEffect } from "react";

const SearchDropdown = () => {
  const { isLoading, isDropdownOpen, results } = useSelector(
    (store) => store.search
  );

  return (
    <div
      className={`${styles.wrapper} ${isDropdownOpen ? styles.visible : ""}`}
    >
      {results.length > 0 ? (
        results.map((result) => (
          <SearchResult key={result["place_id"]} {...result} />
        ))
      ) : (
        <p className={styles["no-results"]}>
          No matching results. <br /> Please try again.
        </p>
      )}
    </div>
  );
};

export default SearchDropdown;
