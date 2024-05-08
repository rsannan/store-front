import StoreCard from "./StoreCard";

const StoreFront = () => {
  return (
    <div className="mt-2 flex flex-wrap gap-2 items-center justify-center">
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </div>
  );
};
export default StoreFront;
