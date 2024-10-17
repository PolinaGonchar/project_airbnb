import Heading from "../heading";
import "./index.css";

export default function Host({ ...contact_info }) {
  return (
    <div className="host">
      <List {...contact_info} />
    </div>
  );
}

function List({ name, image, responseRate, responseTime, info, phone }) {
  return (
    <>
      <div className="host__block">
        <img className="host__photo" alt="HostPhoto" src={image} />
        <div className="host__header">
          <Heading>{name}</Heading>
          <div className="host__breadcrumbs-block">
            <span className="host__breadcrumbs">{phone}</span>
            <span className="host__breadcrumbs">{responseTime}</span>
            <span className="host__breadcrumbs">
              {responseRate}% of the response speed
            </span>
          </div>
        </div>
      </div>
      <p className="host__info">{info}</p>
    </>
  );
}