import React from 'react'
import Link from 'next/link'
import uuid from 'uuid'

import './ProductsGrid.scss'

const ProductsGrid = ({ items }) => (
    <div className="products-wrapper">
        {items.map(item => (
            <div className="product" key={uuid()}>
                <div className="product__info">
                    <h1>{item.attributes.product}</h1>
                    <img src={item.attributes.image} alt={item.attributes.product} />
                    <p>{item.attributes.price} /{item.attributes.unit}</p>
                </div>

                <div className="product__link">
                    <Link prefetch href={`/product/${item.id}`}><a className="product__btn">See Item</a></Link>
                </div>

            </div>
        ))}
    </div>
);

export default ProductsGrid;
