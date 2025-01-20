import './App.css'
import Login from './components/Signin/Login'
import Reg from './components/Signup/reg'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Reg /> */}
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/reg"} element={<Reg />}></Route>
          <Route path={"/home"} element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
