import React, { useContext } from 'react'
import Renderer from 'react-test-renderer'
import { IngressProvider, context } from './ingress-provider'

test('IngressProvider should be present', () => {
  expect(IngressProvider).toBeTruthy()
})

const TestComponent = () => {
  const providerContext = useContext(context)
  return <div {...providerContext} />
}

test('IngressProvider should pass addChild and target to the provider', () => {
  const { root } = Renderer.create(
    <IngressProvider>
      <TestComponent />
    </IngressProvider>
  )
  const component = root.findByType('div')
  expect(typeof component.props.addChild).toBe('function')
  expect(component.props.targets).toEqual({})
})
