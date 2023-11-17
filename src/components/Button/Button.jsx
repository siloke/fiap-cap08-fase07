import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px;
  width: 100%;
  background-color: green;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
`;

const Button = ({ onClick, children }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default Button;
