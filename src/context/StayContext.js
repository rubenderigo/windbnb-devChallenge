import { createContext, useReducer, useState } from 'react';
import { stays } from 'data/stays';

const initialState = {
  stays: stays,
  location: 'Helsinki',
  amountGuests: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_ONLY_LOCATION':
      return {
        ...state,
        stays: state.stays.filter((stay) => stay.city === action.payload),
      };
    case 'FILTER_ONLY_GUESTS':
      return {
        ...state,
        stays: state.stays.filter((stay) => stay.maxGuests <= action.payload),
      };
    case 'FILTER_LOCATION_GUESTS':
      return {
        ...state,
        stays: state.stays.filter(
          (stay) =>
            stay.city === action.payload.city &&
            stay.maxGuests >= action.payload.cantGuests
        ),
      };
    case 'FILTER_SET':
      return {
        ...state,
        stays: stays,
      };
    default:
      return state;
  }
};

export const StayContext = createContext({ state: initialState });

export const StayContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [location, setLocation] = useState('Helsinki, Finland');
  const [amountAdults, setAmountAdults] = useState(0);
  const [amountChildren, setAmountChildren] = useState(0);
  const filter = {
    onlyLocation: (value) => dispatch({ type: 'FILTER_ONLY_LOCATION', payload: value.city }),
    onlyGuests: (value) => dispatch({ type: 'FILTER_ONLY_GUESTS', payload: Number(value.guests) }),
    locationGuests: (values) => 
      dispatch({
        type: 'FILTER_LOCATION_GUESTS',
        payload: {
          city: values.location,
          cantGuests: Number(values.guests),
        },
      }),
    set: () => dispatch({ type: 'FILTER_SET' }),
  };
  const handleGuests = {
    amountAdults,
    amountChildren,
    setChildren: (value) => setAmountChildren(value),
    setAdults: (value) => setAmountAdults(value),
  };
  const handleLocation = {
    location,
    set: (value) => setLocation(Object.keys(value).toString()),
  };
  const value = {
    state,
    filter,
    handleGuests,
    handleLocation,
  };

  return <StayContext.Provider value={value}>{children}</StayContext.Provider>;
};
