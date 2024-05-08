import StoreCard from "./StoreCard";

const StoreFront = ({ items, type }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2 items-center justify-center">
      {items.map((item) => {
        return <StoreCard {...item} key={item.name} type={type} />;
      })}
    </div>
  );
};
export default StoreFront;
