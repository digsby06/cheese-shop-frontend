import axios from 'axios'
import uuid from 'uuid'
import Link from 'next/link'

import api from '../../config'

class Products extends React.Component {

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const json = await api.queryProducts()

    return { items: json}
  }

  render () {
    return (
      <div>
        <p>Store has {this.props.items.length} products</p>

        {this.props.items.map(item => (
            <div key={uuid()}>
                <div>
                    <h1>{item.attributes.product}</h1>
                    <img src={item.attributes.image} alt={item.attributes.product} />
                </div>

                <div>
                    <Link prefetch href={`/product/${item.id}`}><a className="product__btn">See Item</a></Link>
                </div>

                <p>{item.attributes.price}</p>
            </div>
        ))}

        <div>
          <Link prefetch href="/"><a className="back__btn">Go to homepage</a></Link>
        </div>
      </div>
    )
  }
}

export default Products;
