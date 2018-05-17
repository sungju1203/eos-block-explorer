import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"

import { fromTheme } from "helper"
import { Button, H3 } from "theme/globalStyle"
import blockIcon from "images/block-icon.png"
import BlockDatacard from "./BlockDatacard"

const GET_BLOCK_INFO = gql`
  {
    blocks {
      previous
      timestamp
      transaction_mroot
      action_mroot
      block_mroot
      producer
      schedule_version
      producer_signature
      input_transactions
      id
      block_num
      ref_block_prefix
    }
  }
`

const Wrapper = styled.div`
  min-width: 850px;
`

const Header = styled.div`
  background: ${fromTheme('white')};
  margin-top: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlockIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
`

class BlockContainer extends Component {
  state = { isLoaded: false }

  fetchBlockInfo = () => {
    this.setState({ isLoaded: true })
  }

  render() {
    const { isLoaded } = this.state

    return (
      <Query query={GET_BLOCK_INFO}>
        {({ error, data, refetch }) => {
          if (error) return <p>Fetching Error</p>
          return (
            <Wrapper>
              <Header>
                <IconWrapper>
                  <BlockIcon src={blockIcon} />
                  <H3>Blocks</H3>
                </IconWrapper>
                {isLoaded ?
                  <Button onClick={() => refetch()}>RELOAD</Button> :
                  <Button onClick={this.fetchBlockInfo}>LOAD</Button>
                }
              </Header>
              {isLoaded &&
                data.blocks.map((data, i) => <BlockDatacard key={i} {...data}/>)
              }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default BlockContainer