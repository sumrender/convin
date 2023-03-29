import { useRootContext } from "../context/RootContext";
export default function Navbar() {
  const { user, handleGoogleAuth, handleSignOut } = useRootContext();

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
        </div>
      </nav>
      <hr />
    </>
  );
}
