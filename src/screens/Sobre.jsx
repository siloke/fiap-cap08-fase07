import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import StyledCardWrapper from "../components/CardWrapper/CardWrapper";

const Sobre = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
        {user !== undefined ? 
        <StyledCardWrapper>
          <h2>{user.nome}</h2>
          <p>{user.formacao}</p>
          <p>{user.experiencia}</p>
        </StyledCardWrapper>        
         : <p>Not found</p> }
    </>
  );
}
 
export default Sobre;