import { createContext, useContext, useState } from "react";

import { IWrapperProps } from "../models/General";
import { TimerSizes } from "../models/Timer";
import { ITag } from "../models/Tasks";
import { TagColors } from "../models/Theme";

interface IDataContext {
  //
}

const DataContext = createContext({} as IDataContext);

export const DataContextProvider = (props: IWrapperProps) => {
  // CACHED APP DATA
  const [cachedTagsList, setCachedTagsList] = useState<ITag[] | null>(null);
  // cached Tasks List

  // MODAL TRANSACTIONAL DATA
  const [tagName, setTagName] = useState<string | null>(null);
  const [tagColor, setTagColor] = useState<TagColors | null>(null);
  const [taskName, setTaskName] = useState<string | null>(null);
  const [taskLength, setTaskLength] = useState<TimerSizes | null>(null);

  const contextValues: IDataContext = {
    //
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
