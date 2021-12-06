import './CountGuest.css';

const CountGuest = ({ title, desciption, value, setValue }) => {
  return (
    <div className="container-count-guest">
      <p className="title-guests">{title}</p>
      <p className="description">{desciption}</p>
      <div className="count">
        <button onClick={() => value > 0 && setValue(value - 1)}>-</button>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};

export default CountGuest;
