import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import StoreFront from "../components/StoreFront/StoreFront";
import { useSelector } from "react-redux";
const Home = () => {
  const [trends, setTrends] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { phones, laptops, headphones } = useSelector(
    (store) => store.storeFront
  );
  useEffect(() => {
    setIsLoading(true);
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
    setTrends({ trendPhone, trendHeadPhones, trendLaptop });
    setIsLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="text-center my-4">
            <h4 className="text-5xl italic font-semibold">Trending Items</h4>
          </div>
          <StoreFront items={trends.trendPhone} type={"phones"} />
          <StoreFront items={trends.trendLaptop} type={"laptop"} />
          <StoreFront items={trends.trendHeadPhones} type={"headphones"} />
        </>
      )}
    </>
  );
};
export default Home;
