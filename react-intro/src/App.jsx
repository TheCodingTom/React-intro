// import './App.css'

import FirstComponent from "./components/FirstComponent"

function App() {
  //JS - functions, variables, etc
  
  const groupName = "Llamas"


  //JSX
  return (
    <div>
      <h1>Hello React World {groupName}</h1>
      <FirstComponent />
    </div>
  )
}

export default App
