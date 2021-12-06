import { useContext } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import Button from 'components/FilterForm/Button';
import Input from 'components/FilterForm/Input';
import styles from './FilterForm.module.css';
import { StayContext } from 'context/StayContext';

const FilterForm = (props) => {
  const { filter } = useContext(StayContext);
  const { handleLocation, handleGuests } = useContext(StayContext);
  const amountGuestsSelected = () => handleGuests.amountChildren + handleGuests.amountAdults;
  const showGuestValue = () => amountGuestsSelected() > 0 ? `${amountGuestsSelected()} Guests` : '' 
  const showSelectLocation = () => props.showLocations !== undefined && (props.setShowLocations(true), props.setShowGuests(false));
  const showSelectGuests = () => props.showGuests !== undefined && (props.setShowLocations(false), props.setShowGuests(true));
  const showDrawer = () => props.showDrawer !== undefined && props.setShowDrawer(true);

  const onSubmit = (values) => {
    if (values.location === '' && values.guests === '') {
      filter.set(values);
    } else if (values.guests === '') {
      filter.onlyLocation(values);
    } else if (values.location === '') {
      filter.onlyGuests(values);
    } else {
      filter.locationGuests(values);
    }
  };

  return (
    <div className={styles[props.classForm]}>
      <Formik
        initialValues={{
          location: 'Helsinki, Finland',
          guests: '',
        }}
        onSubmit={onSubmit}>
        <Form onClick={showDrawer}>
          <Input
            name="location"
            label="Location"
            placeholder="Location"
            classLabel={props.classLabel}
            value={handleLocation.location}
            onClick={showSelectLocation}
          />
          <Input
            name="guests"
            label="Guests"
            placeholder="Add guests"
            classLabel={props.classLabel}
            value={showGuestValue()}
            onClick={showSelectGuests}
          />
          <Button type="submit" classButton={props.classButton}>
            <span className="material-icons">search</span>
            {props.showSearch && 'Search'}
          </Button>
        </Form>
      </Formik>
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
