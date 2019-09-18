import React, { useContext, memo } from 'react'
import { context } from './ingress-provider'

export const IngressTarget = memo(({ id = 'default' }) => {
  const { targets } = useContext(context)
  const children = targets[id] || []
  return (
    <React.Fragment>
      {children.map((child, i) => (
        <React.Fragment key={`ingress-${i}`}>{child}</React.Fragment>
      ))}
    </React.Fragment>
  )
})

IngressTarget.displayName = 'IngressTarget'
