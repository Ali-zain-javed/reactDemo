import React,{ useState }  from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [upload, setUpload] = useState(false);
  const [url, Uploadurl] = useState();
  function videoUpload(e){
    Uploadurl(e.target.value)

    console.log('data',e.target.value);
    setUpload(true);
    }
    function Onback()
    {
      setUpload(false);
    }
  return (
    <div className="App">
      <header className="App-header">
     { upload===false ?<div><img src={logo} className="App-logo" alt="logo" />
        <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={videoUpload}/>
               </div>: <div> 
                
          <div className="smartphone">
              <div className="content">
              <video width="100%" height="100%" controls>
  <source src={url} type="video/mp4" />
</video>
                             </div>
                               </div>
                               <button onClick={Onback}>back</button>                               </div>
          }    
      </header>
    </div>
  );
}

export default App;
