import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import "./ItemDetail.scss"
import { CartContext } from "../CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    isInCart(item.id)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }

    return(
        <div className="detalle">
            <div key={item.id} className="contenedor__producto">
                <h3 className="nombre__producto">{item.nombre}</h3>
                <img src={item.imagen} alt={item.nombre}/>
                <p>Precio: $ {item.precio}</p>
                <p>Subtotal: $ {item.precio * cantidad}</p>

                {
                    isInCart(item.id)
                        ? <Link to="/cart">Terminar mi compra</Link>
                        :<ItemCount 
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        stock={item.stock}
                        agregar={handleAgregar}
                        />
                }
            </div>
        </div>
    )
}

export default ItemDetail