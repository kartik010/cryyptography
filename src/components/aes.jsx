import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Button from '@mui/material/Button';

const AESEncryption = () => {
  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const key = 'yourSecretKey'; // Define your secret key here

  const handleEncrypt = () => {
    try {
      const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
      setCiphertext(encrypted);
    } catch (error) {
      console.error('Encryption error:', error);
    }
  }

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
      setPlaintext(decrypted);
    } catch (error) {
      console.error('Decryption error:', error);
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{color:'#EFA00B'}}>AES Encryption</h1>
      <div style={{ marginBottom: '20px' }}>
        <textarea 
          value={plaintext} 
          onChange={(e) => setPlaintext(e.target.value)} 
          placeholder="Enter plaintext"
          style={{ width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }} 
        />
      </div>
      <Button color="primary" variant="contained" style={{ borderRadius: '20px', marginRight: '10px' }} onClick={handleEncrypt}>Encrypt</Button>
      <Button color="primary" variant="contained" style={{ borderRadius: '20px' }} onClick={handleDecrypt}>Decrypt</Button>
      <div style={{ marginTop: '20px' }}>
        <textarea 
          value={ciphertext} 
          readOnly 
          placeholder="Encrypted/Decrypted text"
          style={{ width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }} 
        />
      </div>
    </div>
  );
}

export default AESEncryption;
