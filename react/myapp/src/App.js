// import logo from './logo.svg';
import './App.css';
// import Display from './display';
// import Message from './message';
import Classex from './component/classex';
import Functionalex from './component/functionalex';
import Newfile from './newfile';
import Inline from './css/inline';
import Internal from './css/Internal';
import External from './css/External';
import Usingmodule from './css/Usingmodule';
import Fragmentex from './fragment/Fragmentex';

function App() {
  return (
    <div className='parent'>
      <h1>Hello world</h1>

      <div className='child'>
        <h2>Hello world</h2>
      </div>
      {/* <Display /> */}
      {/* <Message /> */}
      <Classex />
      <Functionalex />
      <Newfile />
      <Inline />
      <Internal />
      <External />
      <Usingmodule />
      <Fragmentex />
    </div>
  );
}

export default App;
