import { useRootContext } from "../context/RootContext";
import Auth from "./Auth";
import Navbar from "./Navbar";
import Bucket from "./Bucket";
import Card from "./Card";
export default function Home() {
  const { error, loading, user } = useRootContext();
  let data = false;
  let obj = { name: "", ll: "" };
  return (
    <>
      <Navbar />
      {/* if {data} ( obj.map((props) => {<Card />}) ) */}
      {error && (
        <div className="error">
          <p>error</p>
        </div>
      )}
      {loading ? (
        <p>Loading</p>
      ) : user ? (
        <>
          <h1>LOGGED IN</h1>
          <Bucket />
        </>
      ) : (
        <div className="unauthorized">
          <p>Sign in using google to access our cool features</p>
        </div>
      )}
    </>
  );
}
