import { useContext } from 'react';
import { StayContext } from 'context/StayContext';
import styles from './Layout.module.css';

const AmountStay = () => {
  const { state } = useContext(StayContext);
  const amountState = () => state.stays.length > 12 ? '12+' : state.stays.length;

  return (
    <div>
      <p className={styles['amount-stays']}>{amountState()} stays</p>
    </div>
  );
};

export default AmountStay;
