import { CartIcon, MenuIcon, StoreIcon } from "../../Icons";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";
import Modal from "../Modal/Modal";
import {
  handleModalOpen,
  handleSideBarOpen,
} from "../../Features/Navbar/NavbarSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { sideBarOpen } = useSelector((store) => store.navbar);
  const { amount } = useSelector((store) => store.storeFront);

  return (
    <>
      <nav className="bg-gray-800 text-zinc-100">
        <div className="hidden md:flex justify-between items-center">
          <StoreIcon />
          <MainNav />
          <div
            className="cart-icon-container"
            onClick={() => dispatch(handleModalOpen())}
          >
            <p className="badge  bg-amber-300 shadow-lg">{amount}</p>
            <CartIcon />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => dispatch(handleSideBarOpen())}
            className="md:hidden"
          >
            <MenuIcon />
          </button>

          <div
            className="md:hidden cart-icon-container mt-3"
            onClick={() => dispatch(handleModalOpen())}
          >
            <CartIcon />
            <p className="badge bg-amber-300 shadow-lg">{amount}</p>
          </div>
        </div>
        <div className="md:hidden">{sideBarOpen && <Sidebar />}</div>
        <div>
          <Modal />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
