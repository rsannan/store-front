import ReactModal from "react-modal";
import { ModalCartIcon, ModalCloseIcon } from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import ModalCard from "./ModalCard";
import { handleModalOpen } from "../../Features/Navbar/NavbarSlice";
import { clearCart } from "../../Features/Store/StoreFront";

const Modal = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((store) => store.storeFront);
  const { modalOpen } = useSelector((store) => store.navbar);
  ReactModal.setAppElement(document.getElementById("root"));

  return (
    <>
      <ReactModal
        isOpen={modalOpen}
        className={"shadow-lg modal max-w-2xl modal-outer"}
      >
        {/* Header */}
        <div className="modal-container h-full font-body tracking-wide">
          <div className="bg-gray-800 text-zinc-100 h-14 modal-header flex  items-center justify-between">
            <div className="flex items-center gap-1">
              <ModalCartIcon />

              <h2 className="text-2xl ">Cart</h2>
            </div>
            <div onClick={() => dispatch(handleModalOpen())}>
              <ModalCloseIcon />
            </div>
          </div>

          {/* body */}
          <div className="modal-body flex flex-col gap-2">
            {cart.map((item) => {
              return <ModalCard {...item} key={item.name} />;
            })}
          </div>

          {/* footer */}
          <div className="modal-footer bg-gray-800 text-zinc-100">
            <hr className="  border-b border-indigo-500" />
            <div>
              <h4 className="flex  items-center justify-between capitalize mt-1 font-semibold mx-2">
                total <span>${total}</span>
              </h4>
            </div>
            <div className="flex justify-center gap-5 mt-6 mb-2 ">
              <button className="btn btn-confirm">Confirm</button>
              <button
                className="btn btn-clear"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
export default Modal;
