import axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'

import { store } from '../../store'

class Cart extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          subtotal: 0
      }

      this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart() {
      Cookies.remove('cart')
      store.emptyCart()
  }

  render () {

    return (
      <div>

          <div>
              <h1>Shopping Cart</h1>
          </div>

          <div>
              <h1>Subtotal: {this.state.subtotal}</h1>
          </div>

          <div>
              <a className="btn">Checkout</a>
          </div>

          <div>
              <a className="btn" onClick={this.emptyCart}>Empty Cart</a>
          </div>

          <div className="navigation">
            <Link prefetch href="/products"><a className="back__btn">Shop More</a></Link>
          </div>

      </div>
    )
  }
}

export default Cart;
