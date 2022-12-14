import { useUserContext } from "../../../context/UserContext";

const UserGreeting = () => {
  const { userProfile } = useUserContext();
  if (!userProfile || !userProfile.name) return <></>;
  return (
    <div className="w-full flex flex-col items-center justify-center text-center text-lg font-normal">
      <span>
        Hello <span className="font-semibold">{userProfile.name}</span>,
      </span>
      <span className="font-outfit">LETS FOCUS!</span>
    </div>
  );
};

export default UserGreeting;
