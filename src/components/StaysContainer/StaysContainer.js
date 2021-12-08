import StayCard from 'components/StayCard/StayCard';
import styles from './StaysContainer.module.css';
import { useFilterStays } from 'hooks/filter';

const StaysContainer = () => {
  const { state } = useFilterStays();

  return (
    <div className={styles['container-stays']}>
      {state.stays.map((stay) => (
        <StayCard key={stay.title} stay={stay} />
      ))}
    </div>
  );
};

export default StaysContainer;
