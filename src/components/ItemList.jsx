import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="items-div">
          <div className="details">
            <div className="item-detail">
              <span>{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="desc">{item.card.info.description}</p>
          </div>
          <div className="img-div">
            <div className="add-btn-div">
              <button
                className="add-btn"
                onClick={() => {
                  handleClick(item);
                }}
              >
                Add +
              </button>
            </div>
            <img
              src={`${CDN_URL}/${item.card.info.imageId}`}
              className="img-item"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
