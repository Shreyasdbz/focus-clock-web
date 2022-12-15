const SignOutMenu = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-8 gap-8">
      <button className="w-36 flex items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-blue-600 to-violet-400">
        <span className="font-normal text-md py-2 text-white">Sign Out</span>
      </button>
      <button className="w-36 flex items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-slate-900 to-slate-700">
        <span className="font-normal text-sm py-2 text-white font-mono">
          REQUEST ACCOUNT DELETE
        </span>
      </button>
    </div>
  );
};

export default SignOutMenu;
