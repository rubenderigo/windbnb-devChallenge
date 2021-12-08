import styles from './Layout.module.css';
import { useFilterStays } from 'hooks/filter';

const AmountStay = () => {
  const { state } = useFilterStays();
  const amountState = () =>
    state.stays.length > 12 ? '12+' : state.stays.length;

  return (
    <div>
      <p className={styles['amount-stays']}>{amountState()} stays</p>
    </div>
  );
};

export default AmountStay;
