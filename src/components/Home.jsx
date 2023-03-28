import { useUserContext } from "../context/UserContext";

export default function Home() {
  const {user, handleSignOut} = useUserContext();
  return <>
    <div className="navbar">
      <h1>Convin</h1>
      <p>{user.displayName}</p>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  </>;
}
