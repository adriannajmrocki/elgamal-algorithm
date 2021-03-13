import React, { useState } from 'react';
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
  //const decryptedMsg = decryption.decrypt(msgInput);

  return (  
    <div className="msg">
      <textarea 
        className="left-ta"
        rows="8"
        cols="70"
        type="text"
        placeholder="Enter the message..."
        onChange={handleChange}
      />
      {!message ? (
        <textarea
          className="right-ta"
          rows="8"
          cols="70"
          type="text"
          placeholder="Your encoded message"
          disabled
        />
      ) : (
        <textarea
          className="right-ta"
          rows="8"
          cols="70"
          type="text"
          value={encryptedMsg}
          disabled
        />
      )}
    </div>
  );
}
 
export default MessageInput;