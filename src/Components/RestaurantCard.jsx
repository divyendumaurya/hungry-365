import { IMG_CDN_URL } from "../Contants";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  sla
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} minutes</h4>
      <h4>{sla.deliveryTime} hr</h4>
    </div>
  );
};

export default RestrauntCard;
