
import axios from "axios";
import React from "react";


const ServiceContext = React.createContext()

const baseURL = "https://campus-buy.vercel.app/market/services/";

export function ServiceProvider({children}) {
    const [response, setResponse] = React.useState([]);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setResponse(response.data);
      });
    }, []);
  
    if (!response) return null; 
  
    return (
      <ServiceContext.Provider value={response}>
        {children}
      </ServiceContext.Provider>
  )
}

export default ServiceContext

