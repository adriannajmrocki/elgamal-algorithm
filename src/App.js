import Header from './components/Header';
import MessageInput from './components/MessageInput';

import './App.css';

function App() {

  const alphabet = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ π®ƒ©∆";
  alphabet.split('');

  return (
    <div className="App">
      <div className="container">
        <Header />
        <MessageInput alphabet={ alphabet } />
      </div>
    </div>
  );
}

export default App;
