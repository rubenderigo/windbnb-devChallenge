import { useFilterStays } from 'hooks/filter';

import styles from './Layout.module.css';

const AmountStay = () => {
  const { state } = useFilterStays();
  const amountState = () => {
    return state.stays.length > 12 ? '12+' : state.stays.length;
  };

  return (
    <div>
      <p className={styles['amount-stays']}>{amountState()} stays</p>
    </div>
  );
};

export default AmountStay;
