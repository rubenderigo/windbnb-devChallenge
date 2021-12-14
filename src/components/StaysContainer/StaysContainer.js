import StayCard from 'components/StayCard/StayCard';
import { useFilterStays } from 'hooks/filter';
import EmptyStays from 'components/EmptyStays/EmptyStays';

import styles from './StaysContainer.module.css';

const StaysContainer = () => {
  const { state } = useFilterStays();

  return (
    <div className={styles['container-stays']}>
      <div>
        {state.stays.length ? (
          state.stays.map((stay) => <StayCard key={stay.title} stay={stay} />)
        ) : (
          <EmptyStays />
        )}
      </div>
    </div>
  );
};

export default StaysContainer;
