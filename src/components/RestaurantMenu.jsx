import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - Rs.{costForTwo / 100}
      </h3>
      <h1></h1>
      <ul>
        {itemCards?.map((item, i) => (
          <li key={i}>
            {item.card.info.name} - Rs.{item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
