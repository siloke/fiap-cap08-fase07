import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Headline from "../Headline/Headline";
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
            <StyledCardWrapper mx={"24px"}>
                <Flex flexGrow={1} flexDirection={"column"}>
                    <Box width={1}>
                        <Imagem src="public\img\e95ecbe2-fe22-4a16-84dd-6f22a7e5145f.jpg"></Imagem>
                    </Box>
                    <Box mb={"30px"}>
                        <Headline>{integrante.nome}</Headline>
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