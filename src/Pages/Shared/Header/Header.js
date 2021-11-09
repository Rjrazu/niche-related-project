import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>Hello From Header</h2>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Header;