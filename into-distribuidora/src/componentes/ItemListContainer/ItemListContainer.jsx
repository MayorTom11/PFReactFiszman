import "./ItemListContainer.scss"
import ItemList from "../ItemList/ItemList"
import {useCatalogo} from "../..//hooks/useCatalogo"
import { useSearchParams } from "react-router-dom"


export const ItemListContainer = () => {

    const {loading, productos} = useCatalogo()
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search')

    const listado = search
                        ? productos.filter((el) => el.nombre.toLowerCase().includes(search.toLowerCase()))
                        : productos

    return (
            <div className="list__container">
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : <ItemList items={listado}/>
                }
            </div>
    )
}