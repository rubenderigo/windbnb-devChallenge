import PropTypes from "prop-types";

import Button from "components/FilterForm/Button";
import Input from "components/FilterForm/Input";
import { useHandleLocation } from "hooks/location";
import { useHandleGuests } from "hooks/guests";
import { useSubmit } from "hooks/submit";

import styles from "./FilterForm.module.css";

const FilterForm = ({
  classButton,
  classLabel,
  classForm,
  closeDrawer,
  setShowGuests,
  setShowDrawer,
  setShowLocations,
  showSearch,
  showDrawer,
  showGuests,
  showLocations,
}) => {
  const { submit } = useSubmit(closeDrawer);
  const [handleLocation] = useHandleLocation();
  const [handleGuests] = useHandleGuests();

  const showSelectLocation = () => {
    return (
      showLocations !== undefined &&
      (setShowLocations(true), setShowGuests(false))
    );
  };

  const showSelectGuests = () => {
    return (
      showGuests !== undefined && (setShowLocations(false), setShowGuests(true))
    );
  };

  const openDrawer = () => {
    return showDrawer !== undefined && setShowDrawer(true);
  };

  return (
    <div className={styles[classForm]}>
      <form onClick={openDrawer} onSubmit={submit}>
        <Input
          name="location"
          label="Location"
          placeholder="Location"
          classLabel={classLabel}
          value={handleLocation.location.longName}
          onClick={showSelectLocation}
        />
        <Input
          name="guests"
          label="Guests"
          placeholder="Add guests"
          classLabel={classLabel}
          value={handleGuests.showAmount()}
          onClick={showSelectGuests}
        />
        <Button type="submit" classButton={classButton}>
          <span className="material-icons">search</span>
          {showSearch && "Search"}
        </Button>
      </form>
    </div>
  );
};

FilterForm.propTypes = {
  classButton: PropTypes.string,
  classLabel: PropTypes.string,
  classForm: PropTypes.string,
  closeDrawer: PropTypes.func,
  setShowGuests: PropTypes.func,
  setShowDrawer: PropTypes.func,
  setShowLocations: PropTypes.func,
  showSearch: PropTypes.bool,
  showDrawer: PropTypes.bool,
  showGuests: PropTypes.bool,
  showLabel: PropTypes.bool,
  showLocations: PropTypes.bool,
};

FilterForm.defaultProps = {
  classButton: "button",
  classLabel: "label-none",
  classForm: "form-filter",
  closeDrawer: () => {},
  setShowGuests: () => {},
  setShowDrawer: () => {},
  setShowLocations: () => {},
  showSearch: false,
  showDrawer: false,
  showGuests: false,
  showLabel: false,
  showLocations: false,
};

export default FilterForm;
