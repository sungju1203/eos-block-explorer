import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const GET_BLOCK_INFO = gql`
  {
    block {
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
      return <div> {data.block.block_num} / {data.block.timestamp} / {data.block.producer} </div>
      // return data.rates.map(({ id, block_num }) => (
      //   <div key={currency}>
      //     <p>{`${id}: ${block_num}`}</p>
      //   </div>
      // ))
    }}
  </Query>
)

export default BlockInfo