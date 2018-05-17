import React from "react"
import renderer from "react-test-renderer"

import BlockNumber from "../BlockNumber"


test('Block Number', () => {
  const props = {
    blockNumber: 1437576,
    id: '0015ef887c1badff4d207fc03af2ceb78f935ba380e45b71b601901ddb7e508d',
  }

  const component = renderer.create(
    <BlockNumber {...props} />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})