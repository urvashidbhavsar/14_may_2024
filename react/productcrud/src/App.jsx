import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Homepage from './components/Home/Homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/home"} element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
