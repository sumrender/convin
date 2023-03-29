import { useUserContext } from "../context/UserContext";
import Auth from "./Auth";
import Navbar from "./Navbar";
import Bucket from "./Bucket";
import CardDisplay from "./CardDisplay";
export default function App() {
  const { error, loading, user } = useUserContext();
  let data = false;
  let obj = { name: "", ll: "" };
  return (
    <>
      <Navbar />
      <Bucket />
      <CardDisplay />

      {/* if {data} ( obj.map((props) => {<Card />}) ) */}
      {error && (
        <div className="error">
          <p>error</p>
        </div>
      )}
      {loading ? <p>Loading</p> : user ? <>Home</> : <Auth />}
    </>
  );
}
