import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user ? (
        <li className="mb-2">
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-green-500 text-white hover:bg-lime-400 border-2"
          >
            logOut
          </button>
        </li>
      ) : (
        <li>
          <Link to="/logIn">LogIn</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-yellow-600 text-white ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-yellow-400 z-50 text-neutral-content rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Travel Agency
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <ul className="menu menu-horizontal px-1 flex items-center">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
