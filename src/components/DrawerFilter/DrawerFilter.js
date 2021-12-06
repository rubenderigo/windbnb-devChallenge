import { useState } from 'react';
import FormSearch from '../FormSearch/FormSearch';
import LocationsList from '../LocationsList/LocationsList';
import SelectGuest from '../SelectGuest/SelectGuest';
import { StayContextProvider } from '../../context/StayContext';
import './DrawerFilter.css';
import { InputContextProvider } from '../../context/InputContext';

const DrawerFilter = () => {
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  return (
    <div className="container-drawer">
      <div className="drawer">
        <div>
          <StayContextProvider>
            <InputContextProvider>
              <FormSearch
                showSearch={true}
                showLabel={true}
                classLabel="label-drawer"
                classButton="button-search-drawer"
                showLocations={showLocations}
                showGuests={showGuests}
                setShowGuests={setShowGuests}
                setShowLocations={setShowLocations}
              />
            </InputContextProvider>
          </StayContextProvider>
        </div>
        <div className="container-location-guests">
          <div className="location">
            {showLocations && (
              <InputContextProvider>
                <LocationsList />
              </InputContextProvider>
            )}
          </div>
          <div className="guests">
            {showGuests && (
              <InputContextProvider>
                <SelectGuest />
              </InputContextProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerFilter;
