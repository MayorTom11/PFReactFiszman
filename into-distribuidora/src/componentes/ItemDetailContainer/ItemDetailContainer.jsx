import { useEffect, useState } from "react"
import { pedirCatalogo } from "../../helpers/pedirCatalogo"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
        pedirCatalogo()
            .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[])

    return(
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer