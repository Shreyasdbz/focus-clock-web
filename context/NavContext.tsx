/** @format */

import { useContext, createContext, useState } from "react";
import { useRouter } from "next/router";
import { PageRoutes } from "../models/Navigation";

interface INavContext {
  activePage: PageRoutes;
  handleNavigation: (
    route: PageRoutes,
    onClickElement: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const NavContext = createContext({} as INavContext);

interface INavContextProvider {
  children: React.ReactElement | React.ReactElement[];
}

export const NavContextProvier = ({ children }: INavContextProvider) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState<PageRoutes>(PageRoutes.Clock);

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

  const contextValue: INavContext = {
    activePage,
    handleNavigation,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};
