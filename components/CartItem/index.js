import './CartItem.scss'

const CartItem = ({ product }) => {
  return (
    <div className="cart-product">
        <div className="cart-product__image">
            <img src={product.details.image} alt={`${product.details.product} Image`} />
        </div>

        <div className="cart-product__details">
          {product.details.product}
        </div>

        <div className="cart-product__price">
            <span>${product.details.price}</span>
        </div>

        <div className="cart-product__quantity">
            <span>{product.quantity}</span>
        </div>
    </div>
  );


}
export default CartItem;
