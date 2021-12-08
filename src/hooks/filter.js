import { StayContext } from 'context/StayContext';
import { useContext } from 'react';

export const useFilterStays = () => {
  const { state, dispatch } = useContext(StayContext);

  const filter = {
    onlyLocation: (value) =>
      dispatch({ type: 'FILTER_ONLY_LOCATION', payload: { city: value.city } }),
    locationGuests: (values) =>
      dispatch({
        type: 'FILTER_LOCATION_GUESTS',
        payload: {
          city: values.city,
          amountGuests: Number(values.amountGuests),
        },
      }),
  };

  return { state, filter };
};
