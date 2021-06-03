import React, { useState } from 'react'

export default function Section({ title, children, collapsible, defaultCollapsed }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = () => setCollapsed(x => collapsible && !x)

  return <div className="mt-5">
    <h3 onClick={toggle}>
      {title}
      {collapsible && <span> {collapsed ? <span>(+)</span>: <span>(-)</span>}</span>}
    </h3>
    {collapsed ||
      <div>
        {children}
      </div>
    }
  </div>
}