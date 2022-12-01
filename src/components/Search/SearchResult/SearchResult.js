import styles from "./SearchResult.module.scss";
import Button from "../../Button";
import { getWeatherData, setLocation } from "../../../features/weatherSlice";
import { useDispatch } from "react-redux";
import { closeDropdown } from "../../../features/searchSlice";

const SearchResult = ({ lat, lon, display_name }) => {
  const dispatch = useDispatch();

  const handleResultClick = () => {
    dispatch(getWeatherData({ lat, lon }));
    dispatch(setLocation(display_name));
    dispatch(closeDropdown());
  };

  return (
    <Button className={styles.wrapper} onClick={handleResultClick}>
      {display_name}
    </Button>
  );
};

export default SearchResult;
