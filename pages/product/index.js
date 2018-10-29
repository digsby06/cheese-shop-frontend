import axios from 'axios'
import Link from 'next/link'
import uuid from 'uuid'
import Cookies from 'js-cookie'
import { observer } from 'mobx-react'

import api from '../../config'
import { store } from '../../store'

import './Product.scss'

class Product extends React.Component {

    static async getInitialProps ({query}) {
        const json = await api.getProduct(query.id)

        return { item: json}
    }

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }

        this.addToCart = this.addToCart.bind(this)
        this.persistCart = this.persistCart.bind(this)
        this.handleSelect = this.handleSelect.bind(this)

        this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    handleSelect(e) {
        const quantity = parseInt(e.target.value)

        this.setState({
            quantity
        })
    }

    persistCart() {
        const cart = store.productsInCart

        Cookies.set('cart', cart)
    }

    addToCart(obj) {
        Cookies.remove('cart')

        store.prepareCart(obj, this.state.quantity)
        this.persistCart()
    }

    render () {

        return (
          <div className="ProductPage">

              <div className="product-info">
                  <div className="product-feature">
                      <img src={this.props.item.attributes.image} alt={this.props.item.attributes.product} />
                  </div>

                  <div className="product-content">
                      <div className="product-content__copy">
                          <h1>{this.props.item.attributes.product}</h1>

                          <p>{this.props.item.attributes.price} /{this.props.item.attributes.unit}</p>
                          <p>{this.props.item.attributes.desc}</p>
                      </div>

                      <div className="product-content__cart">
                          <div>

                          </div>
                      </div>
                  </div>
              </div>

              <div>
                  <div>
                      <select onChange={(e) => this.handleSelect(e)} value={this.state.quantity}>
                          {this.options.map(opt => <option key={uuid()} value={opt}>{opt}</option>)}
                      </select>
                  </div>

                  <a className="add-btn" onClick={() => this.addToCart(this.props.item)}>Add To Cart</a>
              </div>

              <div>
                <Link prefetch href="/products"><a className="back__btn">See all products</a></Link>
              </div>
          </div>
        )
    }
}

export default observer(Product);
