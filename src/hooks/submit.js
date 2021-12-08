import { useFilterStays } from './filter';
import { useHandleGuests } from './guests';
import { useHandleLocation } from './location';

export const useSubmit = () => {
  const [{ amountSelected }] = useHandleGuests();
  const [{ location }] = useHandleLocation();
  const { filter } = useFilterStays();

  const data = {
    city: location,
    amountGuests: amountSelected(),
  };

  const submit = (e) => {
    e.preventDefault()
    if (amountSelected() === 0) {
      filter.onlyLocation(data);
    } else {
      filter.locationGuests(data);
    }
  };

  return { submit };
};
