import { useContext } from "react"
import { CartContext } from "../CartContext"
import './Cart.scss'


const Cart = () => {

    const {cart, vaciarCarrito, totalCompra, eliminarDeCarrito} = useContext(CartContext)

    return(
        <div>
            <h2>Tu carrito</h2>
            <hr />
            <div className="carrito">
            {
                cart.map((item) =>
                <div key={item.id} className="contenedor__producto">
                    <h3 className="nombre__producto">{item.nombre}</h3>
                    <img src={item.imagen}/>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Subtotal: $ {item.cantidad * item.precio}</p>
                    <hr />
                    <button onClick={() => eliminarDeCarrito(item.id)}>Eliminar</button>
                </div>
                )
            }
            </div>
            <div className="total">
                <h3>TOTAL: $ {totalCompra()}</h3>
                <button onClick={vaciarCarrito} className="vaciar">Vaciar carrito</button>
            </div>
        </div>
    )

}

export default Cart