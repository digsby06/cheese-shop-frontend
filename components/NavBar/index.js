import React from 'react'
import Link from 'next/link'

import './NavBar.scss'

const NavBar = ({ cartAmount }) => (
    <div className="nav-wrapper">
        <nav className="nav">
            <div className="nav__logo">
                <Link prefetch href="/"><h1>MobX Cheese Store</h1></Link>                
            </div>

            <div className="nav__cart">

                <Link href="/cart">
                    <a className="cart">
                      <div className="cart__amount">{ cartAmount }</div>
                      <img className="cart__image" src="/static/shopping-cart.png" alt="Shopping cart" />
                    </a>
                </Link>
            </div>
        </nav>
    </div>
);

export default NavBar;
