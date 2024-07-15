import { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log("data=>", data);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };
  console.log(state);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
