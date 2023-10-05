import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Produtos </Link>
                <Link to="/cart">
                    CART-ICON
                </Link>
            </div>
        </div>
    );
};
