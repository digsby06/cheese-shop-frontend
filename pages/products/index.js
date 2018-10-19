import axios from 'axios'
import Link from 'next/link'

import api from '../../config'
import './Products.scss'
import ProductsGrid from '../../components/ProductsGrid'

class Products extends React.Component {

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const json = await api.queryProducts()

    return { items: json}
  }

  render () {
    return (
        <div>
            <div className="info">
                <p>Showing {this.props.items.length} products</p>
            </div>

            <ProductsGrid items={this.props.items} />

            <div className="navigation">
              <Link prefetch href="/"><a className="back__btn">Go to homepage</a></Link>
            </div>
        </div>
    )
  }
}

export default Products;
