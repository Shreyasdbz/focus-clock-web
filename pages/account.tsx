/** @format */

import ProtectedPage from "../components/auth/ProtectedPage";
import PageTitle from "../components/common/PageTitle";
import TimerSizes from "../components/feature/account/TimerRanges";

const Account = () => {
  return (
    <ProtectedPage>
      <PageTitle text="Account" />
      <TimerSizes />
    </ProtectedPage>
  );
};

export default Account;
