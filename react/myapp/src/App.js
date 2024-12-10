// import logo from './logo.svg';
import './App.css';
import Display from './display';
import Message from './message';

function App() {
  return (
    <div className='parent'>
      <h1>Hello world</h1>

      <div className='child'>
        <h2>Hello world</h2>
      </div>
      <Display />
      <Message />
    </div>
  );
}

export default App;
