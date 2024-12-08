import React, { useContext } from "react";
import profilePic from "../assets/profile.jpg";
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
                            to="/add-equipment"
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
                            to="/all-equipment"
                        >
                            All Equipment
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-gradient-to-r from-green-500 to-lime-300"
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/my-equipment"
                        >
                            My Equipment
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
                            `font-bold text-sm ${isActive
                                ? "rounded-md btn btn-sm bg-gradient-to-r from-green-500 to-lime-300 text-black"
                                : "rounded-md btn btn-sm btn-outline border-none text-white"
                            }`
                        }
                        to="/all-equipment"
                    >
                        All Equipment
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `font-bold text-sm ${isActive
                                ? "rounded-md btn btn-sm bg-gradient-to-r from-green-500 to-lime-300 text-black"
                                : "rounded-md btn btn-sm btn-outline border-none text-white"
                            }`
                        }
                        to="/my-equipment"
                    >
                        My Equipment
                    </NavLink>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end space-x-3">
                {user && user?.email ? (
                    <div className="relative group flex flex-row">
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
                        {/* Logout Button */}
                        <button
                            onClick={logOut}
                            className="btn btn-sm bg-[#211C6A] text-white text-sm ml-2"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/auth/login" className="btn btn-sm bg-[#211C6A] text-white text-sm">
                            Login
                        </Link>
                        <Link to="/auth/register" className="btn btn-sm bg-[#211C6A] text-white text-sm">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
