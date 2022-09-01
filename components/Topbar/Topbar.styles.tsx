import styled from 'styled-components';
import { Button } from '../Button/Button';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: ${({ theme: { colors: { darkBlue } } }) => darkBlue};
`;

export const ConnectWalletButton = styled(Button)<{connected?: boolean}>`
  max-width: 150px;

  ${({connected}) => connected && `
    cursor: auto;
    :hover{
      opacity: 1;
    }
  `}
  
`