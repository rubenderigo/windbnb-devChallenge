import { useHandleLocation } from 'hooks/location';

import styles from './SelectLocations.module.css';

const LocationsList = () => {
  const [handleLocation] = useHandleLocation();

  return (
    <div>
      <ul className={styles['container-list-location']}>
        {handleLocation.allLocations.map((location) => (
          <li
            className={styles['item-location']}
            key={location.shortName}
            onClick={() => handleLocation.set(location)}
          >
            <span className="material-icons">location_on</span>
            {location.longName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
