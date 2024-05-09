import Navbar from "../components/Navbar/Navbar";

import { useSelector } from "react-redux";
import TrendingStore from "../components/StoreFront/TrendingStore";
const Home = () => {
  const { trends } = useSelector((store) => store.storeFront);
  return (
    <>
      <Navbar />

      <>
        <div className="text-center my-4">
          <h4 className="text-5xl italic font-semibold">Trending Items</h4>
        </div>
        <TrendingStore {...trends} />
      </>
    </>
  );
};
export default Home;
