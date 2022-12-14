import Image from "next/image";
import GoogleLogo from "../../assets/google-svgrepo-com.svg";
import AppleLogo from "../../assets/apple-svgrepo-com.svg";
import MicrosoftLogo from "../../assets/microsoft-svgrepo-com.svg";

const SignInMenu = () => {
  function getGoogleSignIn() {
    return (
      <div>
        <button className="flex flex-row items-center justify-center gap-4 w-64 px-4 py-2 rounded-lg shadow-lg bg-white  border-2 border-white hover:border-slate-300">
          <span className="font-normal text-lg">Sign in with Google</span>
          <div className="h-6 w-6 relative">
            <Image src={GoogleLogo} alt={"google logo"} fill />
          </div>
        </button>
      </div>
    );
  }

  function getAppleLogin() {
    return (
      <div>
        <button className="flex flex-row items-center justify-center gap-4 w-64 px-4 py-2 rounded-lg shadow-lg bg-black text-white border-2 border-black hover:border-slate-300">
          <span className="font-normal text-lg">Sign in with Apple</span>
          <div className="h-6 w-6 relative">
            <Image src={AppleLogo} alt={"google logo"} fill />
          </div>
        </button>
      </div>
    );
  }

  function getMicrosoftLogin() {
    return (
      <div>
        <button className="flex flex-row items-center justify-center w-64 px-4 py-2 rounded-lg shadow-lg bg-white dark:bg-msft-brand gap-2 border-2 border-white hover:border-slate-300">
          <div className="h-6 w-6 relative">
            <Image src={MicrosoftLogo} alt={"google logo"} fill />
          </div>
          <span className="font-normal text-lg text-msft-brand dark:text-white">
            Sign in with Microsoft
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {getGoogleSignIn()}
      {getAppleLogin()}
      {getMicrosoftLogin()}
    </div>
  );
};

export default SignInMenu;
