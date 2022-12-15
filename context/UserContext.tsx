/** @format */

import { createContext, useState, useContext } from "react";

import { IAppUser } from "../models/User";
import { IWrapperProps } from "../models/General";

// TODO: Remove mock
import { test_user_1a } from "../mock/User";

interface IUserContext {
  userProfile: IAppUser | null;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = (props: IWrapperProps) => {
  // TODO: Remove mock
  const [userProfile, setUserProfile] = useState<IAppUser | null>(test_user_1a);

  const contextValues: IUserContext = {
    userProfile,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
