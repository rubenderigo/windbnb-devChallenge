import { useContext } from 'react';
import { StayContext } from 'context/StayContext';
import StayCard from 'components/StayCard/StayCard';
import styles from './StaysContainer.module.css';

const StaysContainer = () => {
  const { state } = useContext(StayContext);
  
  return (
    <div className={styles["container-stays"]}>
      {state.stays.map((stay) => (
        <StayCard key={stay.title} stay={stay} />
      ))}
    </div>
  );
};

export default StaysContainer;
