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
      <Link to={"/" + link} className="flex gap-2">
        {links[link]} {link}
      </Link>
    </>
  );
};
export default NavLink;
