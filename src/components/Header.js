import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blur-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                <Link to="/">
                    News Portal
                </Link>
            </h1>
            <nav>
                <Link className="mx-2" to="/">Home</Link>
                <Link className="mx-2" to="/favorites">Favorites</Link>
            </nav>
        </div>
        </header>
    );
};

export default Header;