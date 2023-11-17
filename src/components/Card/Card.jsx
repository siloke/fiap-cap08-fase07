import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Box, Flex } from "reflexbox";
import styled from "styled-components";
import Imagem from "../Imagem/Imagem";


const StyledCardWrapper = styled(Box)`
    padding: 12px;
    border-radius: 12px;
    background-color: white;
`

const Card = ({ integrante }) => {

    return ( 
        <>
            <StyledCardWrapper mx={"24px"} my={"24px"}>
                <Flex flexGrow={1} flexDirection={"column"}>
                    <Flex width={1} alignItems="center" justifyContent="center">
                        <Imagem src={integrante.img}></Imagem>
                    </Flex>
                    <Box mb={"30px"}>
                        <h2>{integrante.nome}</h2>
                        <ul>
                            <li><Link to={`/Experiencia/${integrante.id}`}>Experiencia</Link></li>
                            <li><Link to={`/Formacao/${integrante.id}`}>Formacao</Link></li>
                            <li><Link to={`/Hobbies/${integrante.id}`}>Hobbies</Link></li>
                            <li><Link to={`/Sobre/${integrante.id}`}>Sobre</Link></li>
                        </ul>
                    </Box>
                    <Box width={1}>
                        <Link to={`/Cep/${integrante.cep}`}><Button>Verificar CEP</Button></Link>
                    </Box>
                </Flex>
            </StyledCardWrapper>    
        </>
    );
}
 
export default Card;