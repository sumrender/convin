import { useUserContext } from "../context/UserContext";

export default function Auth() {
  const { handleGoogleAuth } = useUserContext();
  return (
    <>
      <div className="signin">
        <button onClick={handleGoogleAuth}>Sign In</button>
      </div>
    </>
  );
}
