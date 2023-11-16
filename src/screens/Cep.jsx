import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cep = () => {

    const params = useParams()
    const [endereco, setEndereco] = useState({});

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${params.cep}/json/`)
        .then((res) => setEndereco(res.data))
    }, [])

    return ( 
        <>
            <p>CEP: {endereco.cep}</p>
            <p>Localidade: {endereco.localidade} - {endereco.uf}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Logradouro: {endereco.logradouro}</p>
        </>
    );
}
 
export default Cep;