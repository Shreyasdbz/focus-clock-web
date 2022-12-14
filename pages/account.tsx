/** @format */

import ProtectedPage from "../components/auth/ProtectedPage";
import PageTitle from "../components/common/PageTitle";

const Account = () => {
  return (
    <ProtectedPage>
      <PageTitle text="Account" />
    </ProtectedPage>
  );
};

export default Account;
