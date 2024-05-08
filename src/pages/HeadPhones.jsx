import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import StoreFront from "../components/StoreFront/StoreFront";
const HeadPhones = () => {
  const { headphones } = useSelector((store) => store.storeFront);
  return (
    <>
      <Navbar />
      <StoreFront items={headphones} type={"headphone"} />
    </>
  );
};
export default HeadPhones;
