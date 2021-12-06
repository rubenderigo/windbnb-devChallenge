import { useContext } from 'react';
import { StayContext } from '../../context/StayContext';

const CantStays = () => {
  const { state } = useContext(StayContext);
  return (
    <div>
      <p className="cant-stays">{state.length} stays</p>
    </div>
  );
};

export default CantStays;
