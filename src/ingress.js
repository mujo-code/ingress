import { useContext, useEffect } from 'react'
import { context } from './ingress-provider'

export const Ingress = ({ children, target = 'default' }) => {
  const { addChild } = useContext(context)
  useEffect(() => addChild(children, target), [children, addChild, target])
  return null
}
