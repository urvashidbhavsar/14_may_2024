import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'
import Contact from './pages/Contact'
// import Buttonpage from './material/Buttonpage'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Buttonpage /> */}
      <Router>
        <ul>
          <li><NavLink to="">Home</NavLink></li>
          <li><NavLink to="/pages/About">About</NavLink></li>
          <li><NavLink to="/pages/Contact">Contact</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element=""></Route>
          <Route path='/pages/About' element={<About />}></Route>
          <Route path='/pages/Contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  ) 
  
}

export default App
