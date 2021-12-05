import './LocationsList.css';

const locations = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland',
];

const LocationsList = () => {
  return (
    <div>
      <ul className="list-location">
        {locations.map((location) => (
          <li className="item-location" key={location}>
            <span class="material-icons">location_on</span>
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
