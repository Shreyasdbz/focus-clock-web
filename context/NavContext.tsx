/** @format */

import { useContext, createContext, useState } from "react";
import { ModalTypes, BasicModalActions } from "../models/Navigation";

interface INavContext {
  activeModal: ModalTypes;
  handleAnalyticsModal: (action: BasicModalActions) => void;
}

const NavContext = createContext({} as INavContext);

interface INavContextProvider {
  children: React.ReactElement | React.ReactElement[];
}

export const NavContextProvier = ({ children }: INavContextProvider) => {
  const [activeModal, setActiveModal] = useState<ModalTypes>(ModalTypes.None);

  function handleAnalyticsModal(action: BasicModalActions) {
    if (action === BasicModalActions.Open) {
      setActiveModal(ModalTypes.Analytics);
    } else if (action === BasicModalActions.Close) {
      setActiveModal(ModalTypes.None);
    }
  }

  function handleAccountModal() {
    //
  }

  const contextValue: INavContext = {
    activeModal,
    handleAnalyticsModal,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
};
