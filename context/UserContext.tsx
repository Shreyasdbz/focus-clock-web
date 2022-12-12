/** @format */

import { createContext, useState, useContext } from "react";

import { IAppUser } from "../models/User";
import { IWrapperProps } from "../models/general";

interface IUserContext {
  userProfile: IAppUser | null;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IWrapperProps) => {
  const [userProfile, setUserProfile] = useState<IAppUser | null>(null);

  const contextValues: IUserContext = {
    userProfile,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
