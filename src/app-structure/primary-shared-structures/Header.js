import React from 'react';



const Header = function ({ children }) {
    return (
        <header className="breadcrumb is-centered" aria-label="breadcrumbs"  >
            {children}
        </header>
    )

}

export default Header;