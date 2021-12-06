import { useContext} from 'react';
import { StayContext } from 'context/StayContext';
import CountGuests from 'components/SelectGuests/CountGuests';

const SelectGuests = () => {
  const { handleGuests } = useContext(StayContext);

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
