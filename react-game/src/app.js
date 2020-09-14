import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ChatButtonDiv = styled.div`
  user-select: none;
  cursor: hand;
  background:#3578b8;
  border-color: #2b6da8;
  color: white;
  text-align: center;
  font-size: 14px;
  padding: 4px 5px 0 5px;
  border-radius: 4px;
  margin-right: 5px;

  &:hover {
    background: #193f77;
  }
`

const AppComponent = (props) => (
  <ChatButtonDiv onClick={props.sendmsg}>Hi</ChatButtonDiv>
)

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  sendmsg: () => {
    dispatch({ type: 'SendMessage', payload: { msg: "Who am i?" } })
  },
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
