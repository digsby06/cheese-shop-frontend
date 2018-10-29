import axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import uuid from 'uuid'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';

import { store } from '../../store'

import BasicButton from '../../components/BasicButton'
import CartItem from '../../components/CartItem'

import './Cart.scss'

class Cart extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          subtotal: 0
      }

      this.emptyCart = this.emptyCart.bind(this);
      this.checkout = this.checkout.bind(this);
  }

  checkout() {
      console.log('Checking out now')
  }

  emptyCart() {
      Cookies.remove('cart')
      store.emptyCart()
  }

  render () {
    console.log('Subtotal', store.subtotal);

    return (
      <div className="CartPage">
          <div className="CartPage-wrapper">

                <div>
                    <h1>Shopping Cart</h1>
                </div>

                <div className="cart-wrapper">
                    <main className="cart-items">
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
                          <div>
                              { store.subtotal }

                              <BasicButton
                                  text="Checkout"
                                  handleClick={this.checkout}
                                  type="primary"
                              />

                              <BasicButton
                                  text="Empty Cart"
                                  handleClick={this.emptyCart}
                                  type="warning"
                              />
                          </div>
                      )}
                    </aside>
                </div>




                <div className="navigation">
                  <Link prefetch href="/products"><a className="back__btn">Shop More</a></Link>
                </div>

                <DevTools />
          </div>

      </div>
    )
  }
}

export default observer(Cart);
