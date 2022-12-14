import PageWrapper from "../../layout/PageWrapper";
import UserGreeting from "./UserGreeting";

const Clock = () => {
  return (
    <PageWrapper>
      <div>
        <UserGreeting />
      </div>
      <div>Clock Timer</div>
    </PageWrapper>
  );
};

export default Clock;
