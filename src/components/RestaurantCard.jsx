import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <p className="res-rating">Rating: {avgRating} *</p>
        <p className="res-delivery-time">
          Delivery Time: {sla.deliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
