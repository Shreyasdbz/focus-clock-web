/** @format */

import React from "react";

import { PageRoutes } from "../../models/Ui";

import { useUiContext } from "../../context/UiContext";

import {
  BookmarkSquareIcon,
  ChartBarSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const NavBar = () => {
  const { handleNavigation, activePage } = useUiContext();

  function getSiteLogo() {
    if (activePage === PageRoutes.Clock) {
      return (
        <span className="text-4xl md:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-violet-400">
          focus clock
        </span>
      );
    } else {
      return (
        <span className="text-4xl md:text-5xl font-extrabold font-outfit">
          focus clock
        </span>
      );
    }
  }

  function getNavIcon(route: PageRoutes) {
    const baseClasses =
      "h-10 w-10 hover:stroke-white hover:fill-black rounded-full hover:border-2 border-slate-600";
    const activeClasses =
      "h-10 w-10 hover:fill-black rounded-full  stroke-white bg-gradient-to-br from-blue-600 to-violet-400 px-1 py-1";

    switch (route) {
      case PageRoutes.Tasks:
        return (
          <BookmarkSquareIcon
            className={activePage === route ? activeClasses : baseClasses}
          />
        );
      case PageRoutes.Analytics:
        return (
          <ChartBarSquareIcon
            className={activePage === route ? activeClasses : baseClasses}
          />
        );
      case PageRoutes.Account:
        return (
          <UserCircleIcon
            className={activePage === route ? activeClasses : baseClasses}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <div className="w-full flex flex-row items-center justify-center px-2 py-6 bg-white shadow-lg sticky top-0">
      <div className="w-full flex flex-row items-center justify-between max-w-6xl">
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              handleNavigation(PageRoutes.Clock, e);
            }}>
            {getSiteLogo()}
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6">
          <button
            onClick={(e) => {
              handleNavigation(PageRoutes.Tasks, e);
            }}>
            {getNavIcon(PageRoutes.Tasks)}
          </button>
          <button
            onClick={(e) => {
              handleNavigation(PageRoutes.Analytics, e);
            }}>
            {getNavIcon(PageRoutes.Analytics)}
          </button>
          <button
            onClick={(e) => {
              handleNavigation(PageRoutes.Account, e);
            }}>
            {getNavIcon(PageRoutes.Account)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
