import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { fromTheme } from "helper"

const Wrapper = styled.div`
  background: ${fromTheme('primary')};
  color: ${fromTheme('white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 150px;
`

const IdWrapper = styled.div`
  width: 100px;
  font-size: 10px;
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BlockNumber = ({ blockNumber, id }) => (
  <Wrapper>
    <div> Block {blockNumber} </div>
    <IdWrapper> {id} </IdWrapper>
  </Wrapper>
)

BlockNumber.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}

export default BlockNumber