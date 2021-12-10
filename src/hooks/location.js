import { StayContext } from 'context/StayContext';
import { useContext } from 'react';

export const useHandleLocation = () => {
  const { location, allLocations ,setLocation } = useContext(StayContext);

  const handleLocation = {
    location,
    allLocations,
    set: (value) => setLocation({...value}),
  };

  return [handleLocation];
};
