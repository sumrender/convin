import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { user, handleGoogleAuth, handleSignOut } = useUserContext();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./create_card`;
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Convix
              </a>
            </li>
          </ul>

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
                className="btn btn-link px-3 me-2"
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
        </div>
      </div>
    </nav>
  );
}
