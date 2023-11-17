import styled from "styled-components";

const StyledCardWrapper = styled.div`
    display: flex;
    width: max-content;
    flex-direction: column;
    padding: 12px;
    border-radius: 8px;
    background-color: white;
`

const CardWrapper = ( {children} ) => {
    return ( 
        <StyledCardWrapper>{children}</StyledCardWrapper>
    );
}
 
export default CardWrapper;