import { Box } from "reflexbox";
import styled from "styled-components";

export const StyledCardWrapper = styled(Box)`
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