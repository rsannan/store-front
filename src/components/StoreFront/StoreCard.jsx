import { ModalMinusIcon, ModalPlusIcon } from "../../Icons";
import phoneLogo from "../../assets/phone.png";

const StoreCard = () => {
  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-40 object-contain rounded-t-lg"
        alt="Card Image"
        src={phoneLogo}
      />
      <div className="p-4">
        <h2 className="text-xl  font-semibold">Item Name</h2>
        <h4 className="text-xl  font-semibold">
          $ <span>200</span>
        </h4>
        <p className="text-gray-600">
          Item description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam quis ante sit amet tellus ornare tincidunt.
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50 p-2">
            <ModalPlusIcon />
          </button>
          <h4>3</h4>
          <button className="hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/50 p-2">
            <ModalMinusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default StoreCard;
