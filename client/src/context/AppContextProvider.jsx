import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const value = { navigate, user, setUser, isSeller, setIsSeller };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
