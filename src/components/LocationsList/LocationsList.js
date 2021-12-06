import { useContext } from 'react';
import { InputContext } from '../../context/InputContext';
import './LocationsList.css';

const locations = [
  { Helsinki: 'Helsinki, Finland' },
  { Turku: 'Turku, Finland' },
  { Oulu: 'Oulu, Finland' },
  { Vaasa: 'Vaasa, Finland' },
];

const LocationsList = () => {
  const { setLocation } = useContext(InputContext);
  return (
    <div>
      <ul className="container-list-location">
        {locations.map((location) => (
          <li
            className="item-location"
            key={Object.keys(location)}
            onClick={() => setLocation(location)}>
            <span className="material-icons">location_on</span>
            {Object.values(location)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
