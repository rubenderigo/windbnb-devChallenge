import StayCard from 'components/StayCard/StayCard';
import styles from './StaysContainer.module.css';
import { useFilterStays } from 'hooks/filter';
import EmptyStays from 'components/EmptyStays/EmptyStays';

const StaysContainer = () => {
  const { state } = useFilterStays();

  return (
    <div className={styles['container-stays']}>
      {state.stays.length ? state.stays.map((stay) => (
        <StayCard key={stay.title} stay={stay} />
      )) : <EmptyStays />}
    </div>
  );
};

export default StaysContainer;
