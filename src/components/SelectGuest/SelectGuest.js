import { useContext} from 'react';
import { InputContext } from '../../context/InputContext';
import CountGuest from '../CountGuest/CountGuest';

const SelectGuest = () => {
  const { cantAdults, cantChildren, setCantChildren, setCantAdults } =
    useContext(InputContext);
  return (
    <div className="container-select-guests">
        <CountGuest
          title="Adults"
          desciption="Ages 13 or above"
          value={cantAdults}
          setValue={setCantAdults}
        />
        <CountGuest
          title="Children"
          desciption="Ages 2-12"
          value={cantChildren}
          setValue={setCantChildren}
        />
    </div>
  );
};

export default SelectGuest;
