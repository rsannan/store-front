import { ModalMinusIcon, ModalPlusIcon } from "../../Icons";
import { useState } from "react";
import phoneLogo from "../../assets/phone.png";
import laptopLogo from "../../assets/laptop.png";
import headphoneLogo from "../../assets/headphones.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/Store/StoreFront";

const StoreCard = (props) => {
  const { name, price, type } = props;
  const dispatch = useDispatch();
  const [cartAmount, setCartAmount] = useState(0);
  const {} = useSelector((store) => store.storeFront);
  const imgSrc = (type) => {
    if (type == "phones") {
      return phoneLogo;
    } else if (type == "laptop") {
      return laptopLogo;
    } else {
      return headphoneLogo;
    }
  };
  const increaseCartAmount = () => {
    setCartAmount(cartAmount + 1);
  };
  const decreaseCartAmount = () => {
    if (cartAmount != 0) {
      setCartAmount(cartAmount - 1);
    }
  };
  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-40 object-contain rounded-t-lg"
        alt="Card Image"
        src={imgSrc(type)}
      />
      <div className="p-4">
        <h2 className="text-xl  font-semibold">{name}</h2>
        <h4 className="text-xl  font-semibold">
          $ <span>{price}</span>
        </h4>
        <p className="text-gray-600">
          Item description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam quis ante sit amet tellus ornare tincidunt.
        </p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50 p-2"
            onClick={increaseCartAmount}
          >
            <ModalPlusIcon />
          </button>
          <h4>{cartAmount}</h4>
          <button
            className="hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/50 p-2"
            onClick={decreaseCartAmount}
          >
            <ModalMinusIcon />
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <button
            className="btn btn-add"
            onClick={() => {
              dispatch(addToCart({ name, price, type, cartAmount }));
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default StoreCard;
