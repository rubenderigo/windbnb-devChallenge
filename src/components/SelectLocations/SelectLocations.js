import { useContext } from 'react';
import { StayContext } from 'context/StayContext';
import { locations } from 'data/locations';
import styles from './SelectLocations.module.css'

const LocationsList = () => {
  const { handleLocation } = useContext(StayContext);

  return (
    <div>
      <ul className={styles["container-list-location"]}>
        {locations.map((location) => (
          <li
            className={styles["item-location"]}
            key={Object.keys(location)}
            onClick={() => handleLocation.set(location)}>
            <span className="material-icons">location_on</span>
            {Object.values(location)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
