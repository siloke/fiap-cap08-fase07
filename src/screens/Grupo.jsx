import Card from "../components/Card/Card";
import integrantes from "../data/integrantes";
import { Box } from "reflexbox";

const Grupo = () => {

    return (  
        <>  
            <Box display={"flex"} flexWrap={"wrap"} width={["100%, 50%"]} justifyContent={"space-evenly"}>
                {integrantes.map((integrante) => <Card key={integrante.id} integrante={integrante}></Card>)}
            </Box>
        </>
    );
}
 
export default Grupo;