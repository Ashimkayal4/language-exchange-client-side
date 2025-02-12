import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for dark/light mode

import logo from '../../assets/learn-language-resources.jpg';

const Navbar = () => {
    const { user, logOut, setUser, isDarkMode, toggleTheme } = useContext(AuthContext);

    const signOut = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "LogOut successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(res.user);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const links = (
        <ul className='flex flex-col lg:flex-row gap-4'>
            <li className='mr-1'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='mr-1'>
                <NavLink to="/find-tutors">Find tutors</NavLink>
            </li>
         
            {
                user && (
                    <li className='mr-1'>
                        <NavLink to="/add-tutorials">Add Tutorials</NavLink>
                    </li>
                )
            }

            {user && (
                <li className='mr-1'>
                    <NavLink to="/my-tutorials">My Tutorials</NavLink>
                </li>
            )}
            {
                user && (
                    <li className='mr-1'>
                        <NavLink to="/my-booked-tutors">My booked tutors</NavLink>
                    </li> 
                )
            }

            <li className='mr-1'>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
        </ul>
    );

    return (
        <div className={`navbar ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'} fixed z-10 bg-opacity-30 `}>
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
                        className="menu menu-sm dropdown-content space-y-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <img className='w-12 h-10 flex justify-center rounded-full' src={logo} alt="Logo" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-2xl focus:outline-none"
                >
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                </button>

                {
                    !user && <>
                        <Link to="/login">
                            <a className="mr-2 border p-2 rounded-md hover:bg-black hover:text-white">Login</a>
                        </Link>
                        <Link to="/register">
                            <a className="border p-2 rounded-md hover:bg-black hover:text-white">Register</a>
                        </Link>
                    </>
                }

                {
                    user && (
                        <>
                            <div className="relative group">
                                <img
                                    className="rounded-full border mx-3 h-12 w-12"
                                    src={user.photoURL}
                                    alt="User Profile"
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-center">{user.displayName}</p>
                                </div>
                            </div>
                            <button onClick={signOut} className="btn max-sm:ml-5">LogOut</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
