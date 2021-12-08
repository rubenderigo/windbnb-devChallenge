import { StayContext } from 'context/StayContext';
import { useContext } from 'react';

export const useHandleLocation = () => {
  const { location, setLocation } = useContext(StayContext);

  const handleLocation = {
    location,
    set: (value) => setLocation(value),
  };

  return [handleLocation];
};
