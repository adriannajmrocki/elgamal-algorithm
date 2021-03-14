import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';

import Header from './components/Header';
import MessageInput from './components/MessageInput';
import Home from './components/Home';

import './App.css';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  const alphabet = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ π®ƒ©∆";
  alphabet.split('');

  if (isLoading) return <ReactLoading type="bubbles" color="#416651" height={250} width={250} />

  return (
    <div className="App">
      <div className="container">
        <Header />
        {isAuthenticated ? (
          <MessageInput alphabet={ alphabet } />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;
