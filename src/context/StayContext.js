import { createContext, useReducer, useState } from 'react';
import { stays } from 'data/stays';
// import { locations } from 'data/locations';

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
        location: action.payload.city,
        stays: stays.filter((stay) => stay.city === action.payload.city),
      };
    case 'FILTER_LOCATION_GUESTS':
      return {
        ...state,
        location: action.payload.city,
        amountGuests: action.payload.amountGuests,
        stays: stays.filter(
          (stay) =>
            stay.city === action.payload.city &&
            stay.maxGuests >= action.payload.amountGuests
        ),
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
  
  const value = {
    state,
    location,
    amountAdults,
    amountChildren,
    setLocation,
    setAmountAdults,
    setAmountChildren,
    dispatch,
  };

  return <StayContext.Provider value={value}>{children}</StayContext.Provider>;
};
