import './Card.css';

const Card = ({ stay }) => {
  return (
    <div className="card-stays" key={stay.title}>
      <img
        className="img-stay"
        alt="stay"
        src={stay.photo}
        width="395px"
        height="269px"
      />
      <div className="header-stay">
        <div>
          {stay.superHost && <p className="superHost-stay">Super Host</p>}
          <p className="type-stay">{`${stay.type} ${
            stay.beds ? ` . ${stay.beds} beds` : ``
          }`}</p>
        </div>
        <div className="rating-container">
          <span className="material-icons star">star</span>
          <p className="rating-stay">{stay.rating}</p>
        </div>
      </div>
      <p className="title-stay">{stay.title}</p>
    </div>
  );
};

export default Card;
