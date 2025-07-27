import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); // ✅ Hook used correctly inside function

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">SkillSwap</Link>
                <div>
                    <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
                    <Link className="btn btn-outline-light mx-2" to="/register">Register</Link>

                    {location.pathname === "/" && (
                        <Link className="btn btn-outline-light mx-2" to="/about">About</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
