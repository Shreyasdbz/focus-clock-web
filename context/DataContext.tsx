import { createContext, useContext, useState } from "react";

import { TimerSizes } from "../models/Timer";
import { ITag } from "../models/Tasks";
import { IWrapperProps } from "../models/general";
import { IGradientThemeNames } from "../models/Theme";

import { mockTagsList } from "../mock/TagTasks";

interface IDataContext {
  cachedTagsList: ITag[] | null;
  themeSelection: IGradientThemeNames | null;
}

const DataContext = createContext({} as IDataContext);

export const DataContextProvider = (props: IWrapperProps) => {
  // CACHED APP DATA
  const [cachedTagsList, setCachedTagsList] = useState<ITag[] | null>(
    mockTagsList
  );
  // const [cachedTaskList, setCachedTaskList] = useState<IT>(null)

  // MODAL TRANSACTIONAL DATA
  const [themeSelection, setThemeSelection] =
    useState<IGradientThemeNames | null>(null);
  const [tagName, setTagName] = useState<string | null>(null);
  const [taskName, setTaskName] = useState<string | null>(null);
  const [taskLength, setTaskLength] = useState<TimerSizes | null>(null);

  const contextValues: IDataContext = {
    cachedTagsList,
    themeSelection,
  };
  return (
    <DataContext.Provider value={contextValues}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
