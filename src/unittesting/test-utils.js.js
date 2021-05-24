import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// Import your own reducer
import Store from '../store'

function render(
  ui,
  {
    initialState,
    store = Store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={Store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }