import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { fromTheme } from "helper"

const Wrapper = styled.div`
  background: ${fromTheme('primary')};
  color: ${fromTheme('white')};
  font-size: 12px;
  text-align: left;
  word-wrap: break-word;
  padding: 10px;
`

const P = styled.div`
  margin-left: 10px;
`

const BlockDetail = ({
  previous,
  timestamp,
  transaction_mroot,
  action_mroot,
  block_mroot,
  producer,
  schedule_version,
  producer_signature,
  input_transactions,
  id,
  block_num,
  ref_block_prefix,
}) => (
  <Wrapper>
    {"{"}
    <br/>
    <P>previous: {previous},</P>
    <P>timestamp: {timestamp},</P>
    <P>transaction_mroot: {transaction_mroot},</P>
    <P>action_mroot: {action_mroot},</P>
    <P>block_mroot: {block_mroot},</P>
    <P>producer: {producer},</P>
    <P>schedule_version: {schedule_version},</P>
    <P>producer_signature: {producer_signature},</P>
    <P>input_transactions: [ {input_transactions} ],</P>
    <P>id: {id},</P>
    <P>block_num: {block_num},</P>
    <P>ref_block_prefix: {ref_block_prefix},</P>
    {"}"}
  </Wrapper>
)

BlockDetail.propTypes = {
  previous: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  transaction_mroot: PropTypes.string.isRequired,
  action_mroot: PropTypes.string.isRequired,
  block_mroot: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  schedule_version: PropTypes.number.isRequired,
  producer_signature: PropTypes.string.isRequired,
  input_transactions: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  block_num: PropTypes.number.isRequired,
  ref_block_prefix: PropTypes.number.isRequired,
}

export default BlockDetail