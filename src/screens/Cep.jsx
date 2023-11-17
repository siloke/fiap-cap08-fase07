import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import Container from "../components/Container/Container";

const Cep = () => {

    const params = useParams()
    const [endereco, setEndereco] = useState({});

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${params.cep}/json/`)
        .then((res) => setEndereco(res.data))
    }, [])

    return ( 
        <>
            <Container>
                <CardWrapper>
                    <p>CEP: {endereco.cep}</p>
                    <p>Localidade: {endereco.localidade} - {endereco.uf}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Logradouro: {endereco.logradouro}</p>
                </CardWrapper>
            </Container>
        </>
    );
}
 
export default Cep;