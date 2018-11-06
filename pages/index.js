import Link from 'next/link'
import api from '../config'

import ShopAll from '../components/ShopAll'

const Home = ({ item }) => {
    console.log('Home', item);
    return (
        <div className="HomePage">
            <div className="feature-headline">
                <h1>Product of the month</h1>
            </div>

            <div className="feature-item">

                <div className="feature-item__headline">
                    <h1>{item.attributes.product}</h1>
                </div>

                <div className="feature-item__image">
                    <img src={item.attributes.image} alt={item.attributes.product} />
                </div>

                <Link prefetch href={`/product/${item.id}`}><a className="feature-item__btn">See Product</a></Link>
            </div>

            <ShopAll
                text="See All Products"
                link="/products"
                type="primary"
            />

        </div>
    )
}

Home.getInitialProps = async () => {
    const json = await api.getProduct(2)

    return { item: json }
}

export default Home;
