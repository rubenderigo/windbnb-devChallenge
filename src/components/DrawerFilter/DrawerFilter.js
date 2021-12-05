import FormSearch from '../FormSearch/FormSearch';
import LocationsList from '../LocationsList/LocationsList';
import './DrawerFilter.css';

const DrawerFilter = () => {
  return (
    <div className="container-drawer">
      <div className="drawer">
        <div>
          <FormSearch
            showSearch={true}
            showLabel={true}
            classLabel="label-drawer"
            classButton="button-search-drawer"
          />
        </div>
        <div>
          <LocationsList />
        </div>
      </div>
    </div>
  );
};

export default DrawerFilter;
