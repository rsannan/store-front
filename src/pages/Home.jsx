import Navbar from "../components/Navbar/Navbar";
import StoreFront from "../components/StoreFront/StoreFront";
import { useSelector } from "react-redux";
const Home = () => {
  const { phones, laptops, headphones } = useSelector(
    (store) => store.storeFront
  );
  const itemIndex = Math.floor(Math.random() * 10);
  const itemIndex1 = Math.floor(Math.random() * 10);
  const trendPhone = phones.filter(
    (phone, index) => index == itemIndex || index == itemIndex1
  );
  const trendLaptop = laptops.filter(
    (phone, index) => index == itemIndex || index == itemIndex1
  );
  const trendHeadPhones = headphones.filter(
    (phone, index) => index == itemIndex || index == itemIndex1
  );

  return (
    <>
      <Navbar />
      <div className="text-center my-4">
        <h4 className="text-5xl italic font-semibold">Trending Items</h4>
      </div>
      <StoreFront items={trendPhone} type={"phones"} />
      <StoreFront items={trendLaptop} type={"laptop"} />
      <StoreFront items={trendHeadPhones} type={"headphones"} />
    </>
  );
};
export default Home;
