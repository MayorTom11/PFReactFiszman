import { useContext, useState } from "react"
import { CartContext } from "../CartContext"
import { Navigate, Link } from "react-router-dom"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {

    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
        email2: ''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { nombre, direccion, email, email2 } = values

        if(nombre.length < 3){
            alert("El nombre es demasiado corto")
            return
        }
        if(direccion.length < 8){
            alert("Direccion invalida")
            return
        }
        if(!email.includes("@")){
            alert("Email no valido")
            return
        }
        if(email != email2){
            alert("Por favor verificar ambos email")
            return
        }
        const orden = {
            client: values,
            items: cart,
            total: totalCompra(),
            fyh: new Date()
        }

        orden.items.forEach((item)=>{
            const itemRef = doc(db, "productos", item.id)

            getDoc(itemRef)
                .then((doc)=>{
                    if(doc.data().stock >= item.cantidad){
                        updateDoc(itemRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    }else{
                        alert("Actualmente no contamos con stock de " + item.nombre)
                    }
                })
        })

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc)=> {
                setOrderId(doc.id)
                vaciarCarrito()
            })

    }

    if(orderId){
        return (
            <div>
                <h2>Tu compra se realizo con existo!</h2>
                <hr />
                <p>Tu numero de orden es: {orderId}</p>

                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
        <div>
            <h2>Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Nombre" 
                value={values.nombre}
                name="nombre"
                onChange={handleInput} />
                <input type="text" 
                placeholder="Direccion"
                value={values.direccion}
                name="direccion"
                onChange={handleInput} />
                <input type="email"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleInput} />
                <input type="email"
                placeholder="Verifica tu email"
                value={values.email2}
                name="email2"
                onChange={handleInput} />
            </form>

            <button type="sumbit">Enviar</button>
        </div>
    )

}

export default Checkout