import './ServiceBox.css';

const ServiceBox = ({ title, description, isNew }) => (
  <div className="box">
    {title}
    {isNew && <span className="dot"></span>}
    {isNew && <span className="box_description">{description}</span>}
  </div>
);

export default ServiceBox;