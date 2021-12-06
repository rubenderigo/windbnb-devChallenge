import { useState } from 'react';
import FormSearch from 'components/FilterForm/FilterForm';
import SelectLocations from 'components/SelectLocations/SelectLocations';
import SelectGuests from 'components/SelectGuests/SelectGuests';
import styles from './FilterDrawer.module.css';

const FilterDrawer = () => {
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  return (
    <div className={styles['drawer-container']}>
      <div className={styles['drawer']}>
        <div>
          <FormSearch
            showSearch
            showLabel 
            classLabel="label"
            classButton="button-secondary"
            classForm="form-filter-secondary"
            showLocations={showLocations}
            showGuests={showGuests}
            setShowGuests={setShowGuests}
            setShowLocations={setShowLocations}
          />
        </div>
        <div className={styles['location-guests-container']}>
          <div className={styles['location']}>
            {showLocations && <SelectLocations />}
          </div>
          <div className={styles['guests']}>
            {showGuests && <SelectGuests />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
