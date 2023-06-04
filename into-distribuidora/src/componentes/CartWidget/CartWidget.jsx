import { useContext } from 'react'
import cart from '../../assets/Cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import './CartWidget.scss'

const CartWidget = () => {

    const {totalCarrito} = useContext(CartContext)

    return(
        <div>
            <Link to={"/cart"}><img src={cart} alt="carrito"/>
            <span>{totalCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget