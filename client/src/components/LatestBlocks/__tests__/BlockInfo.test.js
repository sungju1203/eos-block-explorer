import React from "react"
import renderer from "react-test-renderer"

import BlockInfo from "../BlockInfo"


test('Block Info', () => {
  const props = {
    id: '0015ef887c1badff4d207fc03af2ceb78f935ba380e45b71b601901ddb7e508d',
    timestamp: '2018-05-17T04:34:36.500',
    producer: 'eosio',
    transactions: 0,
  }

  const component = renderer.create(
    <BlockInfo {...props} />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})