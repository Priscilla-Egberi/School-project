import axios from "axios";
import React from "react";


const ProductContext = React.createContext()

const baseURL = "https://campus-buy.onrender.com/market/products/";

export function ProductProvider({children}) {
    const [response, setResponse] = React.useState([]);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setResponse(response.data);
      });
    }, []);
  
    if (!response) return null; 
  
    return (
      <ProductContext.Provider value={response}>
        {children}
      </ProductContext.Provider>
  )
}

export default ProductContext

