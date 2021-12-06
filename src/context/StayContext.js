import { createContext, useReducer } from 'react';
import { stays } from '../data/stays';

const reducer = (state = stays, action) => {
  switch (action.type) {
    case 'filter/only-location':
      console.log(state, action);
      return state.filter((stay) => stay.city === action.payload);
    case 'filter/only-guests':
      return state.filter((stay) => stay.maxGuests <= action.payload);
    case 'filter/location-guests':
      return state.filter(
        (stay) =>
          stay.city === action.payload.city &&
          stay.maxGuests >= action.payload.cantGuests
      );
    case 'filter/set':
      return stays;
    default:
      return state;
  }
};

export const StayContext = createContext({ stays: stays });

export const StayContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, stays);

  const value = {
    state,
    filterOnlyLocations: (value) =>
      dispatch({ type: 'filter/only-location', payload: value.city }),
    filterOnlyGuests: (value) =>
      dispatch({ type: 'filter/only-guests', payload: Number(value.guests) }),
    filterLocationsGuests: (values) =>
      dispatch({
        type: 'filter/location-guests',
        payload: {
          city: values.location,
          cantGuests: Number(values.guests),
        },
      }),
    filterSet: () => dispatch({ type: 'filter/set' }),
  };
  return <StayContext.Provider value={value}>{children}</StayContext.Provider>;
};
