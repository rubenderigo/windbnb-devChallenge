import CountGuests from 'components/SelectGuests/CountGuests';
import { useHandleGuests } from 'hooks/guests';

const SelectGuests = () => {
  const [handleGuests] = useHandleGuests();

  return (
    <div className="container-select-guests">
      <CountGuests
        title="Adults"
        desciption="Ages 13 or above"
        value={handleGuests.amountAdults}
        setValue={handleGuests.setAdults}
      />
      <CountGuests
        title="Children"
        desciption="Ages 2-12"
        value={handleGuests.amountChildren}
        setValue={handleGuests.setChildren}
      />
    </div>
  );
};

export default SelectGuests;
