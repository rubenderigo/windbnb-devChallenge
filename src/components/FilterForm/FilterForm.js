import PropTypes from 'prop-types';
import Button from 'components/FilterForm/Button';
import Input from 'components/FilterForm/Input';
import styles from './FilterForm.module.css';
import { useHandleLocation } from 'hooks/location';
import { useHandleGuests } from 'hooks/guests';
import { useSubmit } from 'hooks/submit';

const FilterForm = (props) => {
  const { submit } = useSubmit();
  const [handleLocation] = useHandleLocation();
  const [handleGuests] = useHandleGuests();
  const showSelectLocation = () =>
    props.showLocations !== undefined &&
    (props.setShowLocations(true), props.setShowGuests(false));
  const showSelectGuests = () =>
    props.showGuests !== undefined &&
    (props.setShowLocations(false), props.setShowGuests(true));
  const showDrawer = () =>
    props.showDrawer !== undefined && props.setShowDrawer(true);
  const closeDrawer = (e) => (submit(e), () => props.setShowDrawer(false));

  return (
    <div className={styles[props.classForm]}>
      <form onClick={showDrawer} onSubmit={closeDrawer}>
        <Input
          name="location"
          label="Location"
          placeholder="Location"
          classLabel={props.classLabel}
          value={handleLocation.location.longName}
          onClick={showSelectLocation}
        />
        <Input
          name="guests"
          label="Guests"
          placeholder="Add guests"
          classLabel={props.classLabel}
          value={handleGuests.showAmount()}
          onClick={showSelectGuests}
        />
        <Button type="submit" classButton={props.classButton}>
          <span className="material-icons">search</span>
          {props.showSearch && 'Search'}
        </Button>
      </form>
    </div>
  );
};

FilterForm.propTypes = {
  showSearch: PropTypes.bool,
  classButton: PropTypes.string,
  classLabel: PropTypes.string,
  showDrawer: PropTypes.bool,
};

FilterForm.defaultProps = {
  showSearch: false,
  classButton: 'button',
  classLabel: 'label-none',
};

export default FilterForm;
