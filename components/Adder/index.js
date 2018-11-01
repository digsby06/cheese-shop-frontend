import './Adder.scss'
import Cookies from 'js-cookie'
import { store } from '../../store'


class Adder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 0
        }
    }

    persistCart = () => {
        const cart = store.productsInCart

        Cookies.set('cart', cart)
    }

    addToCart = (obj) => {
        Cookies.remove('cart')

        store.prepareCart(obj, this.state.quantity)
        this.persistCart()
    }

    increment = () => {
        console.log('Incrementing');
        this.setState(state => {
            return { quantity: state.quantity + 1 }
        }, () => this.addToCart(this.props.product))
    }

    decrement = () => {
        console.log('Decrementing');
        this.setState(state => {
            return { quantity: state.quantity - 1 }
        }, () => this.addToCart(this.props.product))
    }

    render () {
        const { quantity } = this.state
        const status = quantity > 0 ? quantity : 'Add To Cart'

        return (
            <div className="adder">
                <div className="adder-wrapper">

                        { quantity > 0 && (
                            <div className="adder-col adder-btn">
                                <span className="adder-col__btn adder-col__btn-sub" onClick={this.decrement}>-</span>
                            </div>
                        )}

                    <div className="adder-col">
                        <span className="adder-col__status">{status}</span>
                    </div>

                    <div className="adder-col adder-btn">
                        <span className="adder-col__btn adder-col__btn-add" onClick={this.increment}>+</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Adder
