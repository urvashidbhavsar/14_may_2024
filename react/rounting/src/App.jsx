import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'
import Contact from './pages/Contact'
// import Buttonpage from './material/Buttonpage'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import ConditionalEx from './conditionalEx/ConditionalEx';
import Userdata from './search/Userdata';

function App() {

  return (
    <>
      {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
      {/* <FontAwesomeIcon icon={faTractor} /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Buttonpage /> */}
      {/* <Router>
        <Navigation />

        <Routes>
          <Route path='/' element=""></Route>
          <Route path='/pages/About' element={<About />}></Route>
          <Route path='/pages/Contact' element={<Contact />}></Route>
        </Routes>
      </Router> */}
      {/* <ConditionalEx /> */}
      <Userdata />
    </>
  )

}

export default App
