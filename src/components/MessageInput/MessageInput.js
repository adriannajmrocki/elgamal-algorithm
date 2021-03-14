import React, { Fragment, useState } from 'react';

import { ElGamal } from '../../utils/ElGamal';

import './MessageInput.css';

const MessageInput = ({ alphabet }) => {

  const [message, setMessage] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setMessage(value);
  }

  const encryption = ElGamal(alphabet, 69);
  const decryption = ElGamal(alphabet, 69);

  let msgInput = message;
  msgInput = encryption.encrypt(msgInput, decryption.pubKey);

  const encryptedMsg = msgInput;
  const decryptedMsg = decryption.decrypt(encryptedMsg);

  return ( 
    <Fragment>
      <div className="msg">
        <input 
          type="text"
          placeholder="Enter the message..."
          onChange={handleChange}
        />
      </div>
      <div className="cipher">
        <textarea 
          rows="8"
          cols="70"
          type="text"
          value={encryptedMsg}
          placeholder="Encrypted message"
          disabled
        />
        <textarea 
          rows="8"
          cols="70"
          type="text"
          value={decryptedMsg}
          placeholder="Decrypted message"
          disabled
        />
      </div>
    </Fragment>
  );
}
 
export default MessageInput;