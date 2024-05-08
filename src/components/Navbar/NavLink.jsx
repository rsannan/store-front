import { PhoneIcon, HeadphoneIcon, LaptopIcon, HomeIcon } from "../../Icons";
import { Link } from "react-router-dom";

const NavLink = ({ link }) => {
  const links = {
    Phones: <PhoneIcon />,
    Headphones: <HeadphoneIcon />,
    Laptops: <LaptopIcon />,
    Home: <HomeIcon />,
  };
  return (
    <>
      {links[link]}
      <Link to={"/" + link}>{link}</Link>
    </>
  );
};
export default NavLink;
