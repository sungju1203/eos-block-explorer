import React, { Component } from "react"
import styled, { keyframes, ThemeProvider } from "styled-components"

import { theme } from "theme/globalStyle"
import BlockContainer from "components/BlockInfo"
import logo from "images/eos-logo.svg"

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  height: 8rem;
  padding: 1rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.dark};
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

class App extends Component {
  state = { theme }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>EOS BLOCK EXPLORER v1.0</AppTitle>
          </AppHeader>
            <BlockContainer/>
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
