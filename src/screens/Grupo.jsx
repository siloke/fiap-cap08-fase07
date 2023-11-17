import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import integrantes from "../data/integrantes";

const Grupo = () => {

    return (  
        <>  
        <Container>
            {integrantes.map((integrante) => <Card key={integrante.id} integrante={integrante}></Card>)}
        </Container>
        </>
    );
}
 
export default Grupo;