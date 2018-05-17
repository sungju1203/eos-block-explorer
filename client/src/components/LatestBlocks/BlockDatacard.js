import React, { Component } from "react"
import styled from "styled-components"
import moment from "moment"
import PropTypes from "prop-types"

import { fromTheme } from "helper"
import BlockNumber from "./BlockNumber"
import BlockInfo from "./BlockInfo"
import BlockDetail from "./BlockDetail"

const InfoWrapper = styled.div`
  background: ${fromTheme('white')};
  display: flex;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`

class BlockDatacard extends Component {
  state = { isExpanded: false }

  showDetail = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() {
    const { isExpanded } = this.state
    const { block_num, id, timestamp, producer, input_transactions } = this.props
    return (
      <React.Fragment>
        <InfoWrapper onClick={this.showDetail}>
          <BlockNumber blockNumber={block_num} id={id} />
          <BlockInfo
            id={id}
            timestamp={moment(timestamp).format('YYYY/MM/DD HH:mm:ss')}
            producer={producer}
            transactions={input_transactions.length}
          />
        </InfoWrapper>
        {isExpanded &&
          <BlockDetail {...this.props} />
        }
      </React.Fragment>
    )
  }
}

BlockDatacard.propTypes = {
  block_num: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  input_transactions: PropTypes.array.isRequired,
}

InfoWrapper.displayName = 'InfoWrapper'
BlockDetail.displayName = 'BlockDetail'

export default BlockDatacard