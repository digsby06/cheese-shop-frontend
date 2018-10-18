import Link from 'next/link'

export default () => {
    return (
        <div>
            <div className="feature-item">
              <h1>Product of the month</h1>
              <Link prefetch href="/product/2"><a className="feature-item__btn">See Page</a></Link>
            </div>

            <div>
              <Link prefetch href="/products"><a className="back__btn">See all products</a></Link>
            </div>
        </div>
    )
}
