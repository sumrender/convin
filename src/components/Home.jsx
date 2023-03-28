import { useUserContext } from "../context/UserContext";
import Auth from "./Auth";
import Navbar from "./Navbar";

export default function App() {
  const { error, loading, user } = useUserContext();
  return (
    <>
      <Navbar />
      {error && (
        <div className="error">
          <p>error</p>
        </div>
      )}
      {loading ? <p>Loading</p> : user ? <>Home</> : <Auth />}
    </>
  );
}
