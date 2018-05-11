import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  width: 10em;
`

const BlockNumber = ({ blockNumber }) => (
  <Wrapper>
    Block {blockNumber}
  </Wrapper>
)

export default BlockNumber