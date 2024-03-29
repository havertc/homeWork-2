import React from 'react'
import ReactCounter from './assets/ReactCounter'
import ReduxCounter from './assets/RedaxCounter'
import TodoReact from './assets/TodoReact'
import TodoRedux from './assets/TodoRedux'

const App = () => {
  return (
    <div>
      React
      <ReactCounter/>
      <hr/>
      Redux
      <ReduxCounter/>
      <hr/>
      Todo
      <TodoReact/>
      <hr />
      TodoRedux
      <TodoRedux/>
    </div>
  )
}

export default App