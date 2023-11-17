import Card from "../components/Card/Card";
import integrantes from "../data/integrantes";
import { Box } from "reflexbox";

const Grupo = () => {

    return (  
        <>  
            <Box display={"flex"} width={"80%"} justifyContent={"space-between"}>
                {integrantes.map((integrante) => <Card key={integrante.id} integrante={integrante}></Card>)}
            </Box>
        </>
    );
}
 
export default Grupo;