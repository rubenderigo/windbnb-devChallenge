import { useContext } from 'react';
import { StayContext } from '../../context/StayContext';
import Card from '../Card/Card';
import './ContainerStays.css'

const ContainerStays = () => {
  const { state } = useContext(StayContext)
  return (
    <div className="container-stays">
      {state.map((stay) => (
        <Card key={stay.title} stay={stay} />
      ))}
    </div>
  );
};

export default ContainerStays;
