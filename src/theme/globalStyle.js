import styled, { injectGlobal } from "styled-components";

export const theme = {
  primary: '#41403e',
  secondary: '#0071de',
  success: '#86a361',
  danger: '#a7342d',
  warning: '#ddcd45',
  info: '#33b5e5',
  light: '#f4f4f4',
  dark: '#222',
  black: 'black',
  white: 'white'
}

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1 rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`;