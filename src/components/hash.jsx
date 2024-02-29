import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Button from '@mui/material/Button';

const HashingComponent = () => {
  const [inputText, setInputText] = useState('');
  const [hashValue, setHashValue] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const calculateHash = () => {
    if (!inputText) {
      alert('Please enter some text to hash.');
      return;
    }

    const hash = CryptoJS.SHA256(inputText).toString();
    setHashValue(hash);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{color:'#EFA00B'}}>Hashing Component</h1>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          placeholder="Enter text to hash"
          value={inputText}
          onChange={handleInputChange}
          style={{ width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }}
        />
      </div>
      <Button color="primary" variant="contained" style={{ borderRadius: '20px', marginRight: '10px', backgroundColor: '#3366ff', color: 'white' }} onClick={calculateHash}>Calculate Hash</Button>
      {hashValue && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{color:'#EFA00B'}}>Hash Value:</h2>
          <textarea value={hashValue}name="hashing value" style={{ width: '50%', minHeight: '100px', padding: '10px', borderRadius: '5px' }}></textarea>
        </div>
      )}
    </div>
  );
};

export default HashingComponent;
