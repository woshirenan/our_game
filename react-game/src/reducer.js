import {send2server} from './websocket'
import {initState} from './store'

export const reducer = (state=initState, action) =>{
  switch(action.type){
    case 'SendMessage':{
      const msg = action.payload.msg
      send2server('C2S_SendMessage;' + msg)
      break
    }
    case 'ReceiveMessage':{
      alert('received a message:' + action.payload.msg)
      break
    }
    default: {
      break
    }
  }
  return state
}
