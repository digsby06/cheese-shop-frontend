import axios from 'axios'
import Link from 'next/link'

import api from '../../config'
import './Products.scss'
import ProductsGrid from '../../components/ProductsGrid'
import ShopAll from '../../components/ShopAll'


class Products extends React.Component {

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const json = await api.queryProducts()

    return { items: json}
  }

  render () {
    return (
        <div className="ProductsPage">
            <div className="ProductsPage-info">
                <p>Showing {this.props.items.length} products</p>
            </div>

            <ProductsGrid items={this.props.items} />

        </div>
    )
  }
}

export default Products;
