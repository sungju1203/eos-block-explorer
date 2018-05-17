import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { InfoText } from "theme/globalStyle"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
`

const TextWrapper = styled.div`
  display: flex;
`

const BlockInfo = ({ id, timestamp, producer, transactions }) => (
  <Wrapper>
    <TextWrapper>
      produced by &nbsp;
      <InfoText>{producer}</InfoText>
    </TextWrapper>
    <TextWrapper>
      at &nbsp;
      <InfoText>{timestamp}</InfoText>
    </TextWrapper>
    <TextWrapper>
      <InfoText>{transactions}</InfoText>
       &nbsp; transactions
    </TextWrapper>
  </Wrapper>
)

BlockInfo.propTypes = {
  timestamp: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  transactions: PropTypes.number.isRequired,
}

export default BlockInfo