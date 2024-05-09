import { ModalPlusIcon, ModalMinusIcon } from "../../Icons";
import phoneLogo from "../../assets/phone.png";
import laptopLogo from "../../assets/laptop.png";
import headphoneLogo from "../../assets/headphones.png";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
} from "../../Features/Store/StoreFront";

const ModalCard = (props) => {
  const { name, price, type, cartAmount } = props;
  const dispatch = useDispatch();

  const imgSrc = (type) => {
    if (type == "phones") {
      return phoneLogo;
    } else if (type == "laptop") {
      return laptopLogo;
    } else {
      return headphoneLogo;
    }
  };
  return (
    <div className="h-12 shadow-md rounded-md mt-2 flex justify-between items-center  font-medium">
      <div className="flex gap-3">
        <img src={imgSrc(type)} alt="" height={50} width={50} />
        <div>
          <p>{name}</p>
          <p>
            $<span>{price}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-center">{cartAmount}</p>
        <div className="flex gap-2 pb-2">
          <button
            className="hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50"
            onClick={() => dispatch(increaseAmount(name))}
          >
            <ModalPlusIcon />
          </button>
          <button
            className="hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/50"
            onClick={() => dispatch(decreaseAmount(name))}
          >
            <ModalMinusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
