import './ItemCount.scss'

const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {

    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () =>{
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return(
        <div className='item__count'>
            <button onClick={handleRestar} className='handle'>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar} className='handle'>+</button>
            <br />
            <button onClick={agregar} className='comprar'>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount