import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './FormSearch.css';

const FormSearch = ({ showSearch, classButton, classLabel }) => {
  return (
    <div className="form-search">
      <Formik
        initialValues={{
          location: 'Helsinki, Finland',
          guests: '',
        }}
        onSubmit={(values) => console.log(values)}>
        <Form>
          <Input
            name="location"
            label="Location"
            classLabel={classLabel}
            placeholder="Location"
          />
          <Input
            name="guests"
            label="Guests"
            classLabel={classLabel}
            placeholder="Add guests"
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
  showLabel: PropTypes.bool,
  showSearch: PropTypes.bool,
};

FormSearch.defaultProps = {
  showLabel: false,
  showSearch: false,
};

export default FormSearch;
