/** @format */

import ProtectedPage from "../components/auth/ProtectedPage";
import SignOutMenu from "../components/auth/SignOutMenu";
import PageTitle from "../components/common/PageTitle";
import ThemeSettings from "../components/feature/account/ThemeSettings";
import TimerSizes from "../components/feature/account/TimerRanges";

const Account = () => {
  return (
    <>
      <ProtectedPage>
        <PageTitle text="Account" />
        <TimerSizes />
        <ThemeSettings />
        <SignOutMenu />
      </ProtectedPage>
    </>
  );
};

export default Account;
