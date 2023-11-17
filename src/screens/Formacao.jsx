import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import StyledCardWrapper from "../components/CardWrapper/CardWrapper";

const Formacao = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
        {user !== undefined ? <StyledCardWrapper><p>{user.formacao}</p></StyledCardWrapper> : <p>Not found</p> }
    </>
  );
}
 
export default Formacao;