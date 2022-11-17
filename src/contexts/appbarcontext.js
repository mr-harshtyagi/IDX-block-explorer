import { createContext, useState } from "react";

const AppbarContext = createContext();
export function AppbarProvider({ children }) {
  const [value, setValue] = useState(0);
   const updateValue = (newValue) => {
     setValue(newValue);
   };
  
  return (
    <AppbarContext.Provider
      value={{value,updateValue}}
    >
      {children}
    </AppbarContext.Provider>
  );
}

export default AppbarContext;
