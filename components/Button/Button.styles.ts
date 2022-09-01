import styled from "styled-components";

export const ButtonComponent = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  cursor: pointer;
  background: ${({ theme: { colors: { darkBlue } } }) => darkBlue};
  color: ${({ theme: { colors: { white } } }) => white};
  border-radius: 5px;

  :hover{
    opacity: 0.7;
  }

  ${({ disabled, theme: { colors: { darkGray } } }) => disabled && `
    cursor: auto;
    :hover{
      opacity: 1;
    }
    background: ${darkGray};
  `}
`;