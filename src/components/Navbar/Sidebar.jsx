import NavLink from "./NavLink";
import { useSelector, useDispatch } from "react-redux";
import {
  handleActiveLink,
  handleModalOpen,
  handleSideBarOpen,
} from "../../Features/Navbar/NavbarSlice";

const Sidebar = () => {
  const links = ["Home", "Phones", "Headphones", "Laptops"];
  const dispatch = useDispatch();
  const { activeLink } = useSelector((store) => store.navbar);
  return (
    <>
      <div className="bg-slate-700">
        {links.map((link) => {
          return (
            <div
              key={link}
              className={
                "flex items-center justify-start space-x-2 my-4  p-2 hover:shadow-md hover:bg-slate-500   " +
                (activeLink == link
                  ? "border-orange-200 border-solid border-2"
                  : "")
              }
              onClick={() => {
                dispatch(handleActiveLink(link));
                dispatch(handleSideBarOpen());
              }}
            >
              <NavLink link={link} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Sidebar;
