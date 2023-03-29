import { useRootContext } from "../context/RootContext";
import Navbar from "./Navbar";
import Bucket from "./Bucket";
export default function Home() {
  const { error, loading, user } = useRootContext();
  return (
    <>
      <Navbar />
      {error && (
        <div className="error">
          <p>error</p>
        </div>
      )}
      {loading ? (
        <p>Loading</p>
      ) : user ? (
        <>
          <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
            View your Cards
          </h1>
          <Bucket />
        </>
      ) : (
        <div className="unauthorized" style={{ height: "80vh" }}>
          <p>Sign in using google to access our cool features</p>
        </div>
      )}
    </>
  );
}
