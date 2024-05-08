import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import StoreFront from "../components/StoreFront/StoreFront";

const Phones = () => {
  const { phones } = useSelector((store) => store.storeFront);
  return (
    <>
      <Navbar />
      <StoreFront items={phones} type={"phones"} />
    </>
  );
};
export default Phones;
