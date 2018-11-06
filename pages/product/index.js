import axios from 'axios'
import Link from 'next/link'
import { observer } from 'mobx-react'
import Adder from '../../components/Adder'
import ShopAll from '../../components/ShopAll'

import api from '../../config'

import './Product.scss'

const Product = ({ item }) => (
    <div className="ProductPage">
        <div className="product-info">
            <div className="product-feature">
                <img src={item.attributes.image} alt={item.attributes.product} />
            </div>

            <div className="product-content">
                <div className="product-content__copy">
                    <h1>{item.attributes.product}</h1>

                    <p>${item.attributes.price} /{item.attributes.unit}</p>
                    <p>{item.attributes.desc}</p>
                </div>

                <div className="product-content__cart">
                    <Adder
                        product={item}
                    />
                </div>
            </div>
        </div>

        <ShopAll
            text="See All Products"
            link="/products"
            type="primary"
        />
    </div>
)

Product.getInitialProps = async ({query}) => {
    const json = await api.getProduct(query.id)

    return { item: json}
}

export default observer(Product);
