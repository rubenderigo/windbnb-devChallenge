import './Title.css';

const Title = ({ children }) => {
  return ( 
    <div>
      <h1 className="title">{children}</h1>
    </div>
  );
};

export default Title;
