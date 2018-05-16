import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import moment from "moment"

import BlockNumber from "./BlockNumber"
import BlockDetail from "./BlockDetail"
import { Button, H3 } from "theme/globalStyle"
import blockIcon from "images/block-icon.png"

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
  width: 80vw;
`

const Header = styled.div`
  background: ${props => props.theme.white};
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

const InfoWrapper = styled.div`
  background: ${props => props.theme.white};
  display: flex;
  margin: 0.5rem 0;
  &:hover {
    cursor: pointer;
  }
`

class BlockContainer extends Component {
  state = { isLoaded: false }

  fetchBlockInfo = () => {
    this.setState({ isLoaded: true })
  }

  showDetail = async () => {
    
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
                data.blocks.map(({ block_num, timestamp, producer }) => (
                  <InfoWrapper key={block_num} onClick={() => this.showDetail()} >
                    <BlockNumber blockNumber={block_num} />
                    <BlockDetail timestamp={moment(timestamp).format("LLL")} producer={producer} />
                  </InfoWrapper>
                ))
              }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default BlockContainer