import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function TopBar() { // CRITICAL FIX
  return (
    <header className="topbar">
      {/* Logo links to Home */}
      <Link to="/" className="logo">LuxeStay</Link>
      
      {/* Central Navigation Links */}
      <nav className="nav-center">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/hotels">Hotels</NavLink>
        <NavLink to="/bookings">My Bookings</NavLink>
      </nav>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button className="signin">Sign in</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
}
