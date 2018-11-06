import App, { Container } from 'next/app'
import { observer } from 'mobx-react'
import React from 'react'
import Head from 'next/head'
import Cookies from 'js-cookie'

import { store } from "../store"
import api from "../config"

import NavBar from '../components/NavBar'

import '../styles/main.scss'

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
                    <link rel="shortcut icon" href="/static/cheese.png" />
                </Head>

                <NavBar cartAmount={store.cartAmount} />

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
