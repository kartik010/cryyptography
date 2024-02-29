import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Button from '@mui/material/Button';

const SymmetricEncryption = () => {
  const [plaintext, setPlaintext] = useState('');
  const [password, setPassword] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const handlePlaintextChange = (event) => {
    setPlaintext(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const encrypt = () => {
    if (!plaintext || !password) {
      alert('Please enter plaintext and password.');
      return;
    }

    const encrypted = CryptoJS.AES.encrypt(plaintext, password).toString();
    setCiphertext(encrypted);
  };

  const decrypt = () => {
    if (!ciphertext || !password) {
      alert('Please enter ciphertext and password.');
      return;
    }

    const decrypted = CryptoJS.AES.decrypt(ciphertext, password).toString(CryptoJS.enc.Utf8);
    setPlaintext(decrypted);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{color:'#EFA00B'}}>Symmetric Encryption</h1>
      <div style={{ marginBottom: '20px' }}>
        <label style={{color:'#EFA00B'}}>Plaintext:</label>
        <br />
        <textarea value={plaintext} placeholder="Enter text"onChange={handlePlaintextChange} style={{ width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{color:'#EFA00B'}}>Password:</label>
        <br />
        <input type="password" value={password} placeholder="Enter password" onChange={handlePasswordChange} style={{ padding: '10px', borderRadius: '5px' }} />
      </div>
      <Button color="primary" variant="contained" style={{ borderRadius: '20px', marginRight: '10px', backgroundColor: '#3366ff', color: 'white' }} onClick={encrypt}>Encrypt</Button>
      <Button color="primary" variant="contained" style={{ borderRadius: '20px', backgroundColor: '#3366ff', color: 'white' }} onClick={decrypt}>Decrypt</Button>
      <div style={{ marginTop: '20px' }}>
        <label style={{color:'#EFA00B'}}>Ciphertext:</label>
        <br />
        <textarea value={ciphertext} placeholder="encrypted text" readOnly style={{ paddingBottom:'50px',width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }} />
      </div>
    </div>
  );
};

export default SymmetricEncryption;
