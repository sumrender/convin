import { useRootContext } from "../context/RootContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { user, handleGoogleAuth, handleSignOut } = useRootContext();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./create_card`;
    navigate(path);
  };

  return (
    <>
      <nav className="my-navbar">
        <a className="nav-link" href="/">
          <h1>Convix</h1>
        </a>

        <div className="d-flex align-items-center">
          {user ? (
            <>
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-link px-3 me-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="btn btn-primary me-3"
            >
              Sign In
            </button>
          )}
          <button
            type="button"
            onClick={routeChange}
            className="btn btn-primary me-3"
          >
            Create
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
}
