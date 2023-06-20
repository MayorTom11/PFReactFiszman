import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const useCatalogo = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = (collection(db, "productos"))
        const _query = categoriaId
                            ? query(productosRef, where("categoria", "==", categoriaId))
                            : productosRef
        getDocs(_query)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    },[categoriaId])

    return ({
        productos,
        loading
    })
}