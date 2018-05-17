import React, { Component } from "react"
import styled, { keyframes, ThemeProvider } from "styled-components"

import { theme } from "theme/globalStyle"
import { fromTheme } from "helper"
import BlockContainer from "components/LatestBlocks"
import logo from "images/eos-logo.svg"

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: ${fromTheme("dark")};
  color: ${fromTheme("white")};
  display: flex;
  justify-content: center;
  height: 10%;
  padding: 1rem;
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const AppContent = styled.div`
  display: flex;
  justify-content: center;
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
  animation: ${rotate360} infinite 1.5s linear;
  &:hover {
    animation: ${rotate360} infinite .8s linear;
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
            <AppLogo src={logo} alt="logo" />
          </AppHeader>
          <AppContent>
            <BlockContainer/>
          </AppContent>
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
