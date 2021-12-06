import styles from './StayCard.module.css';

const StayCard = ({ stay }) => {
  return (
    <div className={styles['card-stays']} key={stay.title}>
      <img
        className={styles['img-stay']}
        alt="stay"
        src={stay.photo}
        width="395px"
        height="269px"
      />
      <div className={styles['header-stay']}>
        <div>
          {stay.superHost && ( <p className={styles['super-host-stay']}>Super Host</p> )}
          <p className={styles['type-stay']}>{`${stay.type} ${stay.beds ? ` . ${stay.beds} beds` : ``}`}</p>
        </div>
        <div className={styles['rating-container']}>
          <span className={`material-icons ${styles['star']}`}>star</span>
          <p className={styles['rating-stay']}>{stay.rating}</p>
        </div>
      </div>
      <p className={styles['title-stay']}>{stay.title}</p>
    </div>
  );
};

export default StayCard;
