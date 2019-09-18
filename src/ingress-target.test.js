import React from 'react'
import { create } from 'react-test-renderer'
import { context } from './ingress-provider'
import { IngressTarget } from './ingress-target'

test('IngressTarget should be present', () => {
  expect(IngressTarget).toBeTruthy()
})

test('IngressTarget should render children from context', () => {
  const { Provider } = context
  const Foo = () => <>foo</>
  const { root } = create(
    <Provider value={{ targets: { foo: [<Foo key="foo" />] } }}>
      <IngressTarget id="foo" />
    </Provider>
  )

  expect(root.findByType(Foo)).toBeTruthy()
})

test('IngressTarget should render multiple children from context', () => {
  const { Provider } = context
  const Foo = () => <>foo</>
  const { root } = create(
    <Provider
      value={{ targets: { foo: [<Foo key="foo" />, <Foo key="bar" />] } }}
    >
      <IngressTarget id="foo" />
    </Provider>
  )

  expect(root.findAllByType(Foo)).toHaveLength(2)
})
