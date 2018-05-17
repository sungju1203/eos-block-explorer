import React from "react"
import renderer from "react-test-renderer"
import { mount } from "enzyme"

import { fromTheme } from "helper"
import BlockDatacard from "../BlockDatacard"
import BlockDetail from "../BlockDetail"

test('Block Datacard expands', () => {
  const props = {
    previous: '0015ef8791afd56684c335a22703477680973404b27b8a08853bed31c059c40c',
    timestamp: '2018-05-17T04:34:36.500',
    transaction_mroot: '411f319c4b1d68df231455b933d00e9c9231534e6b7d45826ea86d3b4dd12289',
    action_mroot: '9a19514d4a7aa1345bd7ba7f48710734950bcfd7cf15a6261f378841e3cb73bf',
    block_mroot: '09322ac92d6030e017221d74020e5b09f3d53c2d37ab58d9fa429ae5c982c3c3',
    producer: 'eosio',
    schedule_version: 0,
    producer_signature: 'SIG_K1_KAscgo6hWs3R3iyEMNY1dGWzyMbZ49QUk7rybTc4Tzrbrkam3za81i7gMkXuQYXUYNf8Lha5t4pC3f5muG3ocUZqPcJooa',
    input_transactions: [],
    id: '0015ef887c1badff4d207fc03af2ceb78f935ba380e45b71b601901ddb7e508d',
    block_num: 1437576,
    ref_block_prefix: 3229556813,
  }

  const datacard = mount(<BlockDatacard {...props} />)
  const InfoWrapper = datacard.find('InfoWrapper')
  InfoWrapper.instance().showDetail = jest.fn()
  datacard.update()
  // expect(datacard.instance().showDetail).toBeCalledWith()
})