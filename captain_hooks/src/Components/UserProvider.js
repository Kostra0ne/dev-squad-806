import React from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  return <UserContext.Provider value="fifi">{children}</UserContext.Provider>;
};

export default UserProvider;
