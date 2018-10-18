import App, {Container} from 'next/app'
import { observer } from "mobx-react"
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'

// required here for hot reload
// import css from "../styles/layout.sass"

import { store } from "../store"
import api from "../config"


class StoreApp extends App {

    constructor(props) {
        super(props)
        this.handleCookies = this.handleCookies.bind(this);
    }

    componentDidMount() {
        api.queryProducts().then(products => store.setProducts(products));
        this.handleCookies();
    }

    handleCookies() {
        const cart = Cookies.getJSON('cart')

        if (typeof cart !== 'undefined') {
            store.persistCart(cart);
        }
    }


    render () {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Head>
                    <title>MobX Cheese Store</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                </Head>

                <div>
                    <nav>
                        <div>
                            <h1>MobX Cheese Store</h1>
                        </div>

                        <div>
                            <img className="shopping-cart" src="/static/shopping-cart.png" alt="Shopping cart" />
                            <div className="cart-amount">{store.cartAmount}</div>
                        </div>
                    </nav>
                </div>

                <div className="outer">
                    <article>
                        <Component {...pageProps} />
                    </article>
                </div>
            </Container>

        )
    }
}

export default observer(StoreApp);
