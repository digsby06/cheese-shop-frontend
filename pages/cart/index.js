import axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import uuid from 'uuid'
import { observer } from 'mobx-react'

import { store } from '../../store'

import BasicButton from '../../components/BasicButton'
import CartItem from '../../components/CartItem'

import './Cart.scss'

const checkout = () => {
    console.log('Checking out now')
}

const emptyCart = () => {
    Cookies.remove('cart')
    store.emptyCart()
}

const Cart = () => {
    const buttonText = store.productsInCart.length > 0 ? 'Shop More' : 'Add Items';

    return (
        <div className="CartPage">
            <div className="CartPage-wrapper">

                  <div>
                      <h1>Shopping Cart</h1>
                  </div>

                  <div className="cart-wrapper">
                      <main className="cart-items">

                            {
                              store.productsInCart.length > 0 && (
                                  <div className="cart-header">
                                      <p className="cart-header__title">Product</p>
                                      <p className="cart-header__title">Price</p>
                                      <p className="cart-header__title">Quantity</p>
                                  </div>
                              )
                            }

                            { !store.productsInCart.length ?
                                (
                                  <div className="cart-items__empty">
                                      No Items In Cart
                                  </div>
                                )
                              : store.productsInCart.map(product => (<CartItem key={uuid()} product={product} />))
                            }
                      </main>

                      <aside className="cart-checkout">

                        { store.productsInCart.length > 0 && (
                            <div className="cart-checkout__active">
                                <div className="cart-subtotal">
                                    <h1>Subtotal</h1>
                                    <p>${ store.subtotal }</p>
                                </div>

                                <BasicButton
                                    text="Checkout"
                                    handleClick={checkout}
                                    type="primary"
                                />

                                <BasicButton
                                    text="Empty Cart"
                                    handleClick={emptyCart}
                                    type="warning"
                                />
                            </div>
                        )}
                      </aside>
                  </div>

                  <div className="navigation">
                      <Link prefetch href="/products"><a className="back__btn">{buttonText}</a></Link>
                  </div>

            </div>
        </div>
    );
}

// Using a higher order function here to look for changes in the store

export default observer(Cart);
