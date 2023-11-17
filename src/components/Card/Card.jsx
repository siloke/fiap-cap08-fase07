import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Headline from "../Headline/Headline";
import CardWrapper from "../CardWrapper/CardWrapper";

const Card = ({ integrante }) => {

    return ( 
        <>
            <CardWrapper>
                <Headline>{integrante.nome}</Headline>
                <ul style={{display: "flex", listStyleType: "none", padding: "0", gap: "8px"}}>
                    <li><Link to={`/Experiencia/${integrante.id}`}>Experiencia</Link></li>
                    <li><Link to={`/Formacao/${integrante.id}`}>Formacao</Link></li>
                    <li><Link to={`/Hobbies/${integrante.id}`}>Hobbies</Link></li>
                    <li><Link to={`/Sobre/${integrante.id}`}>Sobre</Link></li>
                </ul>
                <Link to={`/Cep/${integrante.cep}`}><Button>Verificar CEP</Button></Link>
            </CardWrapper>
        </>
    );
}
 
export default Card;