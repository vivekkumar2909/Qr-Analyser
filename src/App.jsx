import { useEffect, useState } from 'react';
// import './App.css'
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

function App() {

  const [scanResult, setScannerResult] = useState(null);
  const [scam, setScam] = useState();

  useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,

    })

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      // eslint-disable-next-line no-undef
      setScannerResult(result);
    }

    function error(err) {
      console.warn(err);
    }



    axios.get('/api/scam').then(response => {
      setScam(response.data);
    });

  }, [])



  return (

    <div className='App'>
      <h1> Qr Code Analyser</h1>

      {
        scanResult ? <div>Success : <a href={scanResult}>{scanResult}</a></div> : <div id='reader'></div>
      }

    </div>

  )
}

export default App
