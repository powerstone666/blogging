import Login from "./Login/login"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Signup from "./Login/signup"
import User from "./Users/user"

function App() {
 

  return (
    <>
    <Router>
      <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/user" element={<User/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
