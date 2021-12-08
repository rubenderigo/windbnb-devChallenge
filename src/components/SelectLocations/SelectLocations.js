import { locations } from 'data/locations';
import styles from './SelectLocations.module.css';
import { useHandleLocation } from 'hooks/location';

const LocationsList = () => {
  const [handleLocation] = useHandleLocation();

  return (
    <div>
      <ul className={styles['container-list-location']}>
        {locations.map((location) => (
          <li
            className={styles['item-location']}
            key={location.shortName}
            onClick={() => handleLocation.set(location.shortName)}>
            <span className="material-icons">location_on</span>
            {location.longName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
