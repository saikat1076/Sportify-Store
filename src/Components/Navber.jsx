import React, { useContext } from "react";
import profilePic from "../assets/profile.jpg"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-lg lg:px-5 glass shadow-lg bg-[#34c759] place-items-center">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex="0"
                        className="btn btn-ghost lg:hidden"
                        aria-label="Toggle Navigation"
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
                    </button>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-gradient-to-r from-green-500 to-lime-300"
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-gradient-to-r from-green-500 to-lime-300"
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/AddEquipment"
                        >
                            Add Equipment
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-gradient-to-r from-green-500 to-lime-300"
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to=""
                        >

                        </NavLink>
                    </ul>
                </div>
                <Link to="/" className="text-white font-serif  text-xl">
                    <span className="text-[#26355D] font-semibold">Sport</span>ify Shop
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex space-x-3">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    <NavLink
                        className={({ isActive }) =>
                            `font-bold text-sm ${isActive
                                ? "rounded-md btn btn-sm bg-gradient-to-r from-green-500 to-lime-300 text-black"
                                : "rounded-md btn btn-sm btn-outline border-none text-white"
                            }`
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `font-bold text-sm ${isActive
                                ? "rounded-md btn btn-sm bg-gradient-to-r from-green-500 to-lime-300 text-black"
                                : "rounded-md btn btn-sm btn-outline border-none text-white"
                            }`
                        }
                        to="/add-equipment"
                    >
                        Add Equipment
                    </NavLink>
                    <NavLink
              className={({ isActive }) =>
                `font-bold text-sm ${
                  isActive
                  
                  ? "rounded-md btn btn-sm bg-gradient-to-r from-green-500 to-lime-300 text-black"
                  : "rounded-md btn btn-sm btn-outline border-none text-white"
                }`
              }
              to="/all-equipment"
            >
             All Equipment 
            </NavLink>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end space-x-3">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>











                {user && user?.email ? (
                    <div className="relative group">
                        {/* User Image */}
                        <img
                            src={user?.photoURL || profilePic}
                            alt="User"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                        {/* Tooltip */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1 bg-gray-700 text-sm text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {user?.displayName || "User"}
                        </div>
                    </div>
                ) : (
                    <Link to="/auth/login" className="btn btn-sm bg-[#211C6A] text-white text-sm">
                        Login
                    </Link>
                )}

                {user && user?.email && (
                    <button
                        onClick={logOut}
                        className="btn btn-sm bg-[#211C6A] text-white text-sm"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;