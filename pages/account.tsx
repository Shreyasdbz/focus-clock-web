/** @format */

import ProtectedPage from "../components/auth/ProtectedPage";
import SignOutMenu from "../components/auth/SignOutMenu";
import PageTitle from "../components/common/PageTitle";
import TimerSizes from "../components/feature/account/TimerRanges";

const Account = () => {
  return (
    <ProtectedPage>
      <PageTitle text="Account" />
      <TimerSizes />
      <SignOutMenu />
    </ProtectedPage>
  );
};

export default Account;
