import styled from "styled-components";

const Img = styled.img`
    max-width: 100%;
    border-radius: 50%
`

const Imagem = ( {src} ) => {
    return (
        <>
            <Img src={src} alt="" width="200px"/>
        </> 
    );
}
 
export default Imagem;