import { StayContext } from 'context/StayContext';
import { useContext } from 'react';

export const useHandleGuests = () => {
  const { amountAdults, amountChildren, setAmountAdults, setAmountChildren } = useContext(StayContext);
  const amountSelected = () => handleGuests.amountChildren + handleGuests.amountAdults;
  const showAmount = () => amountSelected() > 0 ? `${amountSelected()} Guests` : '' 

  const handleGuests = {
    amountAdults,
    amountChildren,
    setChildren: (value) => setAmountChildren(value),
    setAdults: (value) => setAmountAdults(value),
    amountSelected,
    showAmount,
  };

  return [handleGuests];
};
