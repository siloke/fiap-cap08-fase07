import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import Container from "../components/Container/Container";

const Hobbies = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
      <Container>
        {user !== undefined ? <CardWrapper><p>{user.hobbies}</p></CardWrapper> : <p>Not found</p> }
      </Container>
    </>
  );
}
 
export default Hobbies;