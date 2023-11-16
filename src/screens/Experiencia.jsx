import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";

const Experiencia = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
      {user !== undefined ? <p>{user.experiencia}</p> : <p>Not found</p> }
    </>
  );
}
 
export default Experiencia;