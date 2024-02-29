import './App.css';
import SymmetricEncryption from './components/SymmetricEncryption';
import AESEncryption from './components/aes';
import HashingComponent from './components/hash';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', textAlign: 'center' }}>
      <div className="container" style={{ padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#EFA00B' }}>Cryptography</h1>
        <div className="content" style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ color: '#FEFEFF', textAlign: 'center', width: '50%' }}>The mysterious discipline of cryptography is the backbone of the internet. Without it, there would be no secrets and no privacy in the digital world. As a developer, you don’t need to understand the math that goes into cryptography, but it’s absolutely essential to know key concepts like hashes, salt, keypairs, encryption, and signing.</p>
        </div>
      </div>
      <div><AESEncryption /></div>
      <div><HashingComponent /></div>
      <div><SymmetricEncryption /></div>
    </div>
  );
}

export default App;
