import styles from './CountGuests.module.css';

const CountGuests = ({ title, desciption, value, setValue }) => {
  return (
    <div className={styles['container-count-guest']}>
      <p className={styles['title-guests']}>{title}</p>
      <p className={styles['description']}>{desciption}</p>
      <div className={styles['count']}>
        <button onClick={() => value > 0 && setValue(value - 1)}>-</button>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};

export default CountGuests;
