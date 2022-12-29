import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { TimerSizes } from "../models/Timer";
import { ITag } from "../models/Tasks";
import { IWrapperProps } from "../models/general";
import { GradientThemes } from "../models/Theme";

import { mockTagsList } from "../mock/TagTasks";

interface IDataContext {
  cachedTagsList: ITag[] | null;
  themeSelection: GradientThemes | null;
  setThemeSelection: Dispatch<SetStateAction<GradientThemes | null>>;
  clearAllTransactionalData: () => void;
}

const DataContext = createContext({} as IDataContext);

export const DataContextProvider = (props: IWrapperProps) => {
  // CACHED APP DATA
  const [cachedTagsList, setCachedTagsList] = useState<ITag[] | null>(
    mockTagsList
  );
  // const [cachedTaskList, setCachedTaskList] = useState<IT>(null)

  // MODAL TRANSACTIONAL DATA
  const [themeSelection, setThemeSelection] = useState<GradientThemes | null>(
    null
  );
  const [tagName, setTagName] = useState<string | null>(null);
  const [taskName, setTaskName] = useState<string | null>(null);
  const [taskLength, setTaskLength] = useState<TimerSizes | null>(null);

  function clearAllTransactionalData() {
    setThemeSelection(null);
    setTagName(null);
    setTaskName(null);
    setTaskLength(null);
  }

  const contextValues: IDataContext = {
    cachedTagsList,
    themeSelection,
    setThemeSelection,
    clearAllTransactionalData,
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
