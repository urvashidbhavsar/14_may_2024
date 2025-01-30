import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Loginservice from './components/Services/Loginservice'
import Addproduct from './components/Product/Addproduct'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={'/home'} element={<Loginservice />}>
            <Route path={"/home"} element={<Homepage />}></Route>
          </Route>
          <Route path={"/product"} element={<Addproduct />}></Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
