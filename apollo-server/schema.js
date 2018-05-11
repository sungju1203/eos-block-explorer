import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"
import resolvers from "./resolver"

const typeDefs = `
type Block {
  previous: String,
  timestamp: String,
  transaction_mroot: String,
  action_mroot: String,
  block_mroot: String,
  producer: String,
  schedule_version: Int,
  producer_signature: String,
  id: String,
  block_num: Int,
  ref_block_prefix: Int
}
type Query {
  block: Block
  blockss(blockNumber: Int!): Block
  blocks: [Block] @cacheControl(maxAge: 15)
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema