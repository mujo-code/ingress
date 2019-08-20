import React, { useContext } from 'react'
import { context } from './ingress-provider'

export const IngressTarget = ({ id = 'default' }) => {
  const { targets } = useContext(context)
  const children = targets[id] || []
  return (
    <React.Fragment>
      {children.map((child, i) => (
        <React.Fragment key={`ingress-${i}`}>{child}</React.Fragment>
      ))}
    </React.Fragment>
  )
}
