import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toplaltert from './components/topheader/Topaltert'
import Navigationbar from './components/topheader/Navigationbar'
import Bottomnav from './components/navigation/Bottomnav'
import Slider from './components/slider/Slider'

function App() {

  return (
    <>
      <Toplaltert />
      <Navigationbar />
      <Bottomnav />
      <Slider />
    </>
  )
}

export default App
