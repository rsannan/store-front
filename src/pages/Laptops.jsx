import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import StoreFront from "../components/StoreFront/StoreFront";

const Laptops = () => {
  const { laptops } = useSelector((store) => store.storeFront);
  return (
    <>
      <Navbar />
      <StoreFront items={laptops} type={"laptop"} />
    </>
  );
};
export default Laptops;
