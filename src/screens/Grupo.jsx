import Card from "../components/Card/Card";
import integrantes from "../data/integrantes";

const Grupo = () => {

    return (  
        <>
            {integrantes.map((integrante) => <Card key={integrante.id} integrante={integrante}></Card>)}
        </>
    );
}
 
export default Grupo;