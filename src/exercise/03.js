// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://react.dev/reference/react/createContext

const ToggleContext = React.createContext()

function ToggleContextProvider({children, value}) {
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return (
    <ToggleContextProvider value={{on, toggle}}>
      {children}
    </ToggleContextProvider>
  )
}

function ToggleOn({children}) {
  const {on} = React.useContext(ToggleContext)
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({children}) {
  const {on} = React.useContext(ToggleContext)
  return on ? null : children
}

// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton(props) {
  const {on, toggle} = React.useContext(ToggleContext)
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
