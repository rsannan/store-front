import { ModalPlusIcon, ModalMinusIcon } from "../../Icons";
import phoneLogo from "../../assets/phone.png";
const ModalCard = () => {
  return (
    <div className="h-12 shadow-md rounded-md mt-2 flex justify-between items-center  font-medium">
      <div className="flex">
        <img src={phoneLogo} alt="" />
        <div>
          <p>Item Name</p>
          <p>
            $<span>399.99</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-center">1</p>
        <div className="flex gap-2 pb-2">
          <button className="hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50">
            <ModalPlusIcon />
          </button>
          <button className="hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/50">
            <ModalMinusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
