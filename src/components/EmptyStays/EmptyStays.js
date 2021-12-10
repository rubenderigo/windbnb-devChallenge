import styles from './EmptyStays.module.css'

const EmptyStays = () => {
  return (
    <div className={styles['empty-stays']}>
      <p>No stays available</p>
    </div>
  );
};

export default EmptyStays;
