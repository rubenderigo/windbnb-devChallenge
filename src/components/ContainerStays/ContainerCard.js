import Card from '../Card/Card';
import './ContainerStays.css'

const ContainerStays = ({ stays }) => {
  return (
    <div className="container-stays">
      {stays.map((stay) => (
        <Card key={stay.title} stay={stay} />
      ))}
    </div>
  );
};

export default ContainerStays;
