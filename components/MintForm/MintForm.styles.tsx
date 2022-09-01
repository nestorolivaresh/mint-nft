import styled from 'styled-components';
import { Button } from '../Button/Button';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
`;

export const InputContainer = styled.div`
  margin-bottom: 25px;
  :last-child{
    margin-bottom: 0px;
  }
`

export const InputLabel = styled.label`
  display: inline-block;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({theme: {colors: {darkBlue}}}) => darkBlue};

`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 16px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FormButton = styled(Button)`
  width: 40%;
`;