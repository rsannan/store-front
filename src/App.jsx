import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Phones from "./pages/Phones";
import HeadPhones from "./pages/HeadPhones";
import Laptops from "./pages/Laptops";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./Features/Store/StoreFront";
function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.storeFront);
  useEffect(() => {
    if (cart.length > 0) {
      dispatch(calculateTotals());
    }
  }, [cart, dispatch]);
  return (
    <div className="font-body">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
        </Route>
        <Route path="Phones" element={<Phones />} />
        <Route path="Headphones" element={<HeadPhones />} />
        <Route path="Laptops" element={<Laptops />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
