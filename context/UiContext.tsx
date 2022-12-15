/** @format */

import { useContext, createContext, useState } from "react";
import { useRouter } from "next/router";

import { IWrapperProps } from "../models/General";
import { PageRoutes, ModalTypes } from "../models/Ui";

interface IUiContext {
  activePage: PageRoutes;
  handleNavigation: (
    route: PageRoutes,
    onClickElement: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  pageBlurActive: boolean;
  currentActiveModal: ModalTypes;
  triggerModal: (modalType: ModalTypes) => void;
  triggerConfirmationModal: (modalType: ModalTypes) => void;
  dismissAllModals: () => void;
}

const UiContext = createContext({} as IUiContext);

export const UiContextProvier = (props: IWrapperProps) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState<PageRoutes>(PageRoutes.Clock);
  const [pageBlurActive, setPageBlurActive] = useState<boolean>(false);
  const [currentActiveModal, setCurrentActiveModal] = useState<ModalTypes>(
    ModalTypes.None
  );

  function handleNavigation(
    route: PageRoutes,
    onClickElement: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    onClickElement.preventDefault();
    setActivePage(route);
    switch (route) {
      case PageRoutes.Clock:
        router.push("/");
        break;
      case PageRoutes.Tasks:
        router.push("/tasks");
        break;
      case PageRoutes.Analytics:
        router.push("/analytics");
        break;
      case PageRoutes.Account:
        router.push("/account");
        break;
      default:
        break;
    }
  }

  function triggerModal(modalType: ModalTypes) {
    setPageBlurActive(true);
    setCurrentActiveModal(modalType);
  }

  function triggerConfirmationModal(modalType: ModalTypes) {
    dismissAllModals();
    setPageBlurActive(true);
    setCurrentActiveModal(modalType);
  }

  function dismissAllModals() {
    setCurrentActiveModal(ModalTypes.None);
    setPageBlurActive(false);
  }

  const contextValue: IUiContext = {
    activePage,
    handleNavigation,
    pageBlurActive,
    currentActiveModal,
    triggerModal,
    triggerConfirmationModal,
    dismissAllModals,
  };

  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  );
};

export const useUiContext = () => {
  return useContext(UiContext);
};
