import NavLink from "./NavLink";
import { useSelector, useDispatch } from "react-redux";
import { handleActiveLink } from "../../Features/Navbar/NavbarSlice";
const MainNav = () => {
  const links = ["Home", "Phones", "Headphones", "Laptops"];
  const dispatch = useDispatch();
  const { activeLink } = useSelector((store) => store.navbar);
  return (
    <>
      <div className=" flex">
        {links.map((link) => {
          return (
            <div
              key={link}
              className={
                "flex items-center justify-start space-x-2 my-4  p-2 hover:shadow-md hover:bg-slate-500 gap-2 " +
                (activeLink == link
                  ? "border-orange-200 border-solid border-2"
                  : "")
              }
              onClick={() => dispatch(handleActiveLink(link))}
            >
              <NavLink link={link} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MainNav;
