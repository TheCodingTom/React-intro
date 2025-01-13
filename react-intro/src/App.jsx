import './App.css'

import FavMeals from "./components/FavMeals"
import FirstComponent from "./components/FirstComponent"
import Contact from './pages/Contact'
import Counter from './pages/Counter'
import Foo from './pages/Foo'
import Home from './pages/Home'

function App() {
  //JS - functions, variables, etc
  
  const groupName = "Llamas"


  //JSX
  return (
    <div>
      {/* <h1 className="red">Hello React World {groupName}</h1> */}
      {/* <FirstComponent /> */}
      {/* <FavMeals/> */}
      {/* <Home/> */}
      {/* <Contact/> */}
      {/* <Counter/> */}
      <Foo/>
    </div>
  )
}

export default App
