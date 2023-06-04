import Catalogo from "../data/Catalogo"

export const pedirCatalogo = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(Catalogo)
        },1000)
    })
}