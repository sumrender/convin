import Auth from "./components/Auth";
import Home from "./components/Home";
import "./App.css";
import { useUserContext } from "./context/UserContext";

export default function App() {
  const { error, loading, user } = useUserContext();
  return (
    <>
      {error && (
        <div className="error">
          <p>error</p>
        </div>
      )}
      {loading ? <p>Loading</p> : user ? <Home /> : <Auth />}
    </>
  );
}
