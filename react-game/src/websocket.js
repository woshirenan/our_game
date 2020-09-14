
import React from 'react'
import { connect } from 'react-redux'

export let send2server = null
let dispatch = null

const reconnect = ()=>{
  send2server = ()=>{
    console.log("Disconnected to server. Possiblely caused by your unstable network or my unstable server.")
  }

  // connect to wss server
  const suburl = window.location.href.substring(window.location.protocol.length)
  const colonIndex = suburl.indexOf(':')
  const newIndex = colonIndex !== -1 ? colonIndex : 100
  const ws = new WebSocket('ws:' + suburl.substring(0, newIndex) + ':1023')
  
  // Connect Success!
  ws.onopen = () => {
    console.log('websocket, onopen')
    send2server = str => {
      ws.send(str)
    }
  }

  // process the event from server
  ws.onmessage = function (event) {
    const msg = event.data
    const semicolonIndex = msg.indexOf(';')
    if (semicolonIndex === -1){
      console.log(' ws.onmessage：semicolonIndex was not found')
      return
    }

    const msgid = msg.substring(0, semicolonIndex)
    const content = msg.substring(semicolonIndex)
    switch(msgid){
      case 'S2C_SendMessage':{
        if (dispatch) {
            dispatch({type: 'ReceiveMessage', payload: {msg: content}})
        }
        break
      }
      default:{
        break
      }
    }
  }

  ws.onclose = function (event) {
    console.log("WebSocket Closed, Reconnecting...")
    setTimeout(reconnect, 3000)
  }

  ws.onerror = function (event) {
    console.log("WebSocket Error!")
  }
}
reconnect()

const WssComponent = (props) => {
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (myDispatch) => {
  dispatch = myDispatch
  return {
  }
}

export const Wss = connect(
  mapStateToProps,
  mapDispatchToProps
)(WssComponent)
