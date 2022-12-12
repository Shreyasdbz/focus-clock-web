/** @format */

import React from "react";

import { PageRoutes } from "../../models/Navigation";

import { useNavContext } from "../../context/NavContext";

import {
  BookmarkSquareIcon,
  ChartBarSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const NavBar = () => {
  const { handleNavigation, activePage } = useNavContext();

  function getNavIcon(route: PageRoutes) {
    const baseClasses =
      "hover:stroke-white hover:bg-slate-500 rounded-lg h-8 w-8";
    const activeClasses =
      "hover:stroke-white hover:bg-slate-500 rounded-lg h-8 w-8 fill-red-500";

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
    <div className="w-full flex flex-row items-start justify-between sticky top-0 px-2 mt-4">
      <div className="h-full flex items-center justify-center">
        <button
          onClick={(e) => {
            handleNavigation(PageRoutes.Clock, e);
          }}>
          Focus Clock
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
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
  );
};

export default NavBar;
