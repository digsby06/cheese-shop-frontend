import axios from 'axios'
import Link from 'next/link'
import { observer } from 'mobx-react'
import Adder from '../../components/Adder'

import api from '../../config'

import './Product.scss'

class Product extends React.Component {

    static async getInitialProps ({query}) {
        const json = await api.getProduct(query.id)

        return { item: json}
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

                          <p>${this.props.item.attributes.price} /{this.props.item.attributes.unit}</p>
                          <p>{this.props.item.attributes.desc}</p>
                      </div>

                      <div className="product-content__cart">
                          <Adder
                              product={this.props.item}
                          />
                      </div>
                  </div>
              </div>


              <div>
                <Link prefetch href="/products"><a className="back__btn">See all products</a></Link>
              </div>
          </div>
        )
    }
}

export default observer(Product);
