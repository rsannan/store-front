import { useGSAP } from "@gsap/react";
import StoreCard from "./StoreCard";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
const StoreFront = ({ items, type }) => {
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
    <div className="mt-2 flex flex-wrap gap-2 items-center justify-center">
      {items.map((item) => {
        return <StoreCard {...item} key={item.name} type={type} />;
      })}
    </div>
  );
};
export default StoreFront;
