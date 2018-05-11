import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import moment from "moment"

import Header from "./Header"
import BlockNumber from "./BlockNumber"
import BlockInfo from "./BlockInfo"

const GET_BLOCK_INFO = gql`
  {
    blocks {
      block_num
      timestamp
      producer
    }
  }
`

const Wrapper = styled.div`
  display: flex;

`

const BlockContainer = () => (
  <Query query={GET_BLOCK_INFO}>
    {({ loading, error, data }) => {
      console.info("Data: ", data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return data.blocks.map(({ block_num, timestamp, producer }) => (
        <Wrapper key={block_num}>
          <BlockNumber blockNumber={block_num} />
          <BlockInfo timestamp={moment(timestamp).format("LLL")} producer={producer} />
        </Wrapper>
      ))
    }}
  </Query>
)

export default BlockContainer