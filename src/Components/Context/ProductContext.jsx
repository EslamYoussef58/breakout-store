import { createContext, useState } from "react";
import { all_product } from "../../data/Data";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [item, setItem] = useState(all_product);

  return (
    <ProductContext.Provider value={{ item, setItem }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider