import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
    const [timer, setTimer] = useState(3)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (timer === 1) navigate(-1)
            setTimer(timer - 1)
        }, 1000)
    },)

    return(
        <div>
            <h1>No se encontro la pagina solicitada</h1>
            <hr />

            <h4>Sera redireccionado en {timer} segundos</h4>
        </div>
    )

}

export default Error404