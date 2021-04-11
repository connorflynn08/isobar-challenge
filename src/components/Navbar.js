import React from 'react'
import Cart from './Cart';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">CourseFinder</a>
                <Cart />
            </nav>
        </div>
    )
}

export default Navbar
