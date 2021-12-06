import { useContext } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './FormSearch.css';
import { StayContext } from '../../context/StayContext';
import { InputContext } from '../../context/InputContext';

const FormSearch = ({
  showSearch,
  classButton,
  classLabel,
  setShowDrawer,
  showDrawer,
  setShowLocations,
  setShowGuests,
  showLocations,
  showGuests,
}) => {
  const {
    filterSet,
    filterOnlyLocations,
    filterLocationsGuests,
    filterOnlyGuests,
  } = useContext(StayContext);
  const { location, cantAdults, cantChildren } = useContext(InputContext);

  const onSubmit = (values) => {
    if (values.location === '' && values.guests === '') {
      filterSet(values);
    } else if (values.guests === '') {
      filterOnlyLocations(values);
    } else if (values.location === '') {
      filterOnlyGuests(values);
    } else {
      filterLocationsGuests(values);
    }
  };

  return (
    <div className="form-search">
      <Formik
        initialValues={{
          location: 'Helsinki, Finland',
          guests: '',
        }}
        onSubmit={onSubmit}>
        <Form onClick={() => showDrawer !== undefined && setShowDrawer(true)}>
          <Input
            name="location"
            label="Location"
            classLabel={classLabel}
            placeholder="Location"
            value={location}
            onClick={() =>
              showLocations !== undefined &&
              (setShowLocations(true), setShowGuests(false))
            }
          />
          <Input
            name="guests"
            label="Guests"
            classLabel={classLabel}
            placeholder="Add guests"
            value={cantChildren + cantAdults}
            onClick={() =>
              showGuests !== undefined &&
              (setShowLocations(false), setShowGuests(true))
            }
          />
          <Button type="submit" classButton={classButton}>
            <span className="material-icons">search</span>
            {showSearch && 'Search'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

FormSearch.propTypes = {
  showSearch: PropTypes.bool,
  classButton: PropTypes.string,
  classLabel: PropTypes.string,
  showDrawer: PropTypes.bool,
};

FormSearch.defaultProps = {
  showSearch: false,
  classButton: 'button-search',
  classLabel: 'label',
};

export default FormSearch;
