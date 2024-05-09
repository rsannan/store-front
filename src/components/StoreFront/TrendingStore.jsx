import { useGSAP } from "@gsap/react";
import StoreCard from "./StoreCard";
import gsap from "gsap";
import { useSelector } from "react-redux";
gsap.registerPlugin(useGSAP);
const TrendingStore = (props) => {
  const { trendsLoading } = useSelector((store) => store.storeFront);
  const { trendHeadPhones, trendPhone, trendLaptop } = props;
  useGSAP(() => {
    gsap.from(".card", {
      y: -200,
      opacity: 0,
      duration: 1,
      ease: "sine.in",
      stagger: 0.5,
    });
  });
  return (
    <div className="mt-2 ">
      {trendsLoading ? (
        <h4>Loading</h4>
      ) : (
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {trendPhone.map((item) => (
            <StoreCard {...item} key={item.name} type="phones" />
          ))}
          {trendHeadPhones.map((item) => (
            <StoreCard {...item} key={item.name} type="headphones" />
          ))}
          {trendLaptop.map((item) => (
            <StoreCard {...item} key={item.name} type="laptop" />
          ))}
        </div>
      )}
    </div>
  );
};
export default TrendingStore;
