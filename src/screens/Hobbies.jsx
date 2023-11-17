import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import StyledCardWrapper from "../components/CardWrapper/CardWrapper";

const Hobbies = () => {

  const params = useParams();
  const user = integrantes.find((integrante) => integrante.id == params.id);

  return (  
    <>
        {user !== undefined ?
          <StyledCardWrapper><p>{user.hobbies}</p></StyledCardWrapper>: <p>Not found</p> }
    </>
  );
}
 
export default Hobbies;