import { useState, useEffect, useRef } from "react";
import styles from "./Search.module.scss";
import Button from "../Button";
import { TbCurrentLocation } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { closeDropdown, getSearchResults } from "../../features/searchSlice";
import { useDispatch } from "react-redux";
import SearchDropdown from "./SearchDropdown";
import { getLocalWeather } from "../../features/weatherSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const searchBtnRef = useRef();
  const inputRef = useRef();

  const handleSearchClose = (e) => {
    if (e.target !== searchBtnRef.current && e.target !== inputRef.current) {
      dispatch(closeDropdown());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSearchClose);
    return () => document.removeEventListener("click", handleSearchClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchResults(searchQuery));
  };

  return (
    <section className={styles.wrapper}>
      <SearchDropdown />
      <form onSubmit={handleSearch} className={styles["search-bar"]}>
        <FaSearch className={styles["icon-search"]} />
        <input
          id="input-search"
          type="text"
          placeholder="Search city or zip code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
        />
      </form>
      <Button
        fill={+true}
        className={styles["btn-search"]}
        onClick={handleSearch}
        type="submit"
        ref={searchBtnRef}
      >
        SEARCH
      </Button>
      <Button
        fill={+true}
        className={styles["btn-location"]}
        onClick={() => dispatch(getLocalWeather())}
      >
        <TbCurrentLocation className={styles["icon-location"]} />
      </Button>
    </section>
  );
};

export default Search;
