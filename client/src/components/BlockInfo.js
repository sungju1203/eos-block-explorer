import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const GET_BLOCK_INFO = gql`
  {
    blocks {
      block_num
      timestamp
      producer
    }
  }
`

const BlockInfo = () => (
  <Query query={GET_BLOCK_INFO}>
    {({ loading, error, data }) => {
      console.log("L: ", loading)
      console.error("E: ", error)
      console.info("Data: ", data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return data.blocks.map(({ block_num, timestamp, producer }) => (
        <div key={block_num}> {block_num} / {timestamp} / {producer} </div>
      ))
    }}
  </Query>
)

export default BlockInfo