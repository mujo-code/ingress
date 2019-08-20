import React, { useCallback, useReducer } from 'react'

export const context = React.createContext()
const { Provider } = context

const TYPES = {
  ADD: 'add',
  REMOVE: 'remove',
}

const intialState = { targets: {} }
const portalReducer = (state = intialState, { type, children, target }) => {
  switch (type) {
    case TYPES.ADD: {
      return {
        targets: {
          ...state.targets,
          [target]: state.targets[target]
            ? state.targets[target].concat(children)
            : [children],
        },
      }
    }
    case TYPES.REMOVE: {
      const targetChildren = state.targets[target]
      const index = targetChildren.indexOf(children)
      return {
        targets: {
          [target]: [
            ...targetChildren.slice(0, index),
            ...targetChildren.slice(index + 1),
          ],
        },
      }
    }
    default:
      return state
  }
}

export const IngressProvider = ({ children }) => {
  const [{ targets }, dispatch] = useReducer(portalReducer, intialState)
  const addChild = useCallback((child, target) => {
    dispatch({ type: TYPES.ADD, children: child, target })
    return () => dispatch({ type: TYPES.REMOVE, children: child, target })
  }, [])
  return <Provider value={{ addChild, targets }}>{children}</Provider>
}
