import { createContext, useState } from "react"


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }

    const eliminarDeCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
  
    const isInCart = (id) => {
      return cart.find((item) => item.id === id)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            vaciarCarrito,
            totalCarrito,
            totalCompra,
            eliminarDeCarrito
        }}>
            {children}
        </CartContext.Provider>
    )

}