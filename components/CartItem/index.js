import './CartItem.scss'

const CartItem = ({ product }) => {
  return (
    <div className="cart-product">
        <div className="cart-product__image">
            <img src={product.details.image} alt={`${product.details.product} Image`} />
        </div>

        <div className="cart-product__details">
            <div className="cart-product__name product-cell">
              {product.details.product}
            </div>

            <div className="cart-product__price product-cell">
                <span>${product.details.price}</span>
            </div>

            <div className="cart-product__quantity product-cell">
                <span>{product.quantity}</span>
            </div>
        </div>
    </div>
  );


}
export default CartItem;
