import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducer'
import { Wss } from './websocket'
import { App } from './app'

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Wss />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
