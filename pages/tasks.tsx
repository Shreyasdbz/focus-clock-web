/** @format */

import { useState } from "react";

import ProtectedPage from "../components/auth/ProtectedPage";
import PageTitle from "../components/common/PageTitle";
import SectionCaption from "../components/common/SectionCaption";
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
        hasButton={true}
        buttonType="ADD"
        onButtonClick={handleAddTag}
      />
      <SectionCaption
        text={"Create and manage tags for different projects or categories"}
      />
      <div>
        <span>TAGS TAGS TAGS</span>
      </div>
      <SectionHeader
        text="Tasks"
        hasButton={true}
        buttonType="ADD"
        onButtonClick={handleAddTag}
      />
      <SectionCaption
        text={"Create and manage tasks or TO-DOs to use with the focus clock"}
      />
      <div>
        <span>TSKS TASKS TASKS</span>
      </div>
      <SectionHeader
        text="Completed Tasks"
        hasButton={true}
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
