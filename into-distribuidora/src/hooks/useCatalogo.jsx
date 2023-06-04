import { useEffect, useState } from "react"
import { pedirCatalogo } from "../helpers/pedirCatalogo"
import { useParams } from "react-router-dom"

export const useCatalogo = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirCatalogo()
            .then((data) => {
                if(!categoriaId){
                    setProductos(data)
                }else{
                    setProductos(data.filter((el) => el.categoria === categoriaId))
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    },[categoriaId])

    return ({
        productos,
        loading
    })
}