import React from 'react'

import DebugProps from '../DebugProps'

export default function ModelShow(props) {
  const { orderPanelTmp, ...restProps } = props
  return (
    <div>
      {orderPanelTmp}
      <hr />
      <DebugProps {...restProps} />
    </div>
  )
}
