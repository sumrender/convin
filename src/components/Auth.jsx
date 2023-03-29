import { useRootContext } from "../context/RootContext";

export default function Auth() {
  const { handleGoogleAuth } = useRootContext();
  return (
    <>
      <div className="signin">
        <button onClick={handleGoogleAuth}>Sign In</button>
      </div>
    </>
  );
}
