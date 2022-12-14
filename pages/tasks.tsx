/** @format */

import { useState } from "react";

import ProtectedPage from "../components/auth/ProtectedPage";
import PageTitle from "../components/common/PageTitle";
import SectionHeader from "../components/common/SectionHeader";
import CompletedTasks from "../components/feature/tasks/CompletedTasks";

const Tasks = () => {
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(false);

  function handleAddTag() {
    //
  }

  return (
    <ProtectedPage>
      <PageTitle text="Tasks & Tags" />
      <SectionHeader
        text="Tags"
        buttonType="ADD"
        onButtonClick={handleAddTag}
      />
      <div>
        <span>TAGS TAGS TAGS</span>
      </div>
      <SectionHeader
        text="Tasks"
        buttonType="ADD"
        onButtonClick={handleAddTag}
      />
      <div>
        <span>TSKS TASKS TASKS</span>
      </div>
      <SectionHeader
        text="Completed Tasks"
        buttonType="HIDE_SHOW_TOGGLE"
        onButtonClick={() => {
          setShowCompletedTasks(!showCompletedTasks);
        }}
        isShowingContent={showCompletedTasks}
      />
      {showCompletedTasks ? <CompletedTasks /> : <></>}
    </ProtectedPage>
  );
};

export default Tasks;
