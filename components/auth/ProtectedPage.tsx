import { IWrapperProps } from "../../models/general";

import { useUserContext } from "../../context/UserContext";
import PageWrapper from "../layout/PageWrapper";
import SignInMenu from "./SignInMenu";

const ProtectedPage = ({ children }: IWrapperProps) => {
  const { userProfile } = useUserContext();
  if (userProfile) {
    return <PageWrapper>{children}</PageWrapper>;
  } else {
    return (
      <PageWrapper>
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-6">
          <span className="font-outfit text-xl font-semibold">
            You need to to be logged in to view this page :(
          </span>
          <div>
            <span className="text-lg font-normal">You can sign in here:</span>
          </div>
          <SignInMenu />
        </div>
      </PageWrapper>
    );
  }
};

export default ProtectedPage;
