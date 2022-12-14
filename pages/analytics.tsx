/** @format */

import ProtectedPage from "../components/auth/ProtectedPage";
import PageTitle from "../components/common/PageTitle";

const Analytics = () => {
  return (
    <div>
      <ProtectedPage>
        <PageTitle text="Analytics" />
      </ProtectedPage>
    </div>
  );
};

export default Analytics;
