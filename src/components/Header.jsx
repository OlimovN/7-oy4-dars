import React, { useContext } from "react";
import { ThemeContext, TokenContext, UserContext } from "../App";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const token = useContext(TokenContext);
  const user = useContext(UserContext);
  const theme=useContext(ThemeContext);

  function handleTheme(event) {
    const themeType = event.target.checked ? "dark" : "light";
    theme.setTheme(themeType);
    localStorage.setItem("theme", themeType);
  }


  return (
    <div>
      <div className="header-auth bg-neutral py-2">
        <div className="container mx-auto">
          {token.token && (
            <>
              <div className="flex flex-row justify-end gap-5">
                <span>Hello, {user.user.name}</span>
                <button className="btn btn-xs btn-outline btn-primary">
                  logout
                </button>
              </div>
            </>
          )}
          {!token.token && (
            <>
              <div className="flex flex-row justify-end gap-3">
                <Link
                  to="/login"
                  className="text-white link link-hover text-xs sm:text-sm"
                >
                  Sign in / Guest
                </Link>
                <Link
                  to="/register"
                  className="text-white link link-hover text-xs sm:text-sm"
                >
                  Create Account
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="header-main">
        <div className=" bg-base-200">
          <div className="navbar container mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
              <a className="btn border-none text-3xl btn-primary bg-blue-400 hover:bg-blue-400 text-white">
                C
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
                {token.token && (
                  <>
                    <li>
                      <NavLink to="/checkout">Checkout</NavLink>
                    </li>
                    <li>
                      <NavLink to="/orders">Orders</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="navbar-end flex gap-3">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={handleTheme}
                  checked={theme.theme == "dark" ? true : false}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />
                {/* sun icon */}
                <svg
                  className="swap-on h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-primary text-white px-2 border-none">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
