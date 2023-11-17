import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import CardWrapper from "../components/CardWrapper/CardWrapper";

const Formacao = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
        {user !== undefined ? <CardWrapper><p>{user.formacao}</p></CardWrapper> : <p>Not found</p> }
    </>
  );
}
 
export default Formacao;