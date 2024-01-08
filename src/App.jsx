import { useState } from 'react'

import './App.css'

function App() {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  const load = () =>
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          setError(true);
        }
        return response.json()
      })
      .then(data => setInfo(data))
      
    

  return <>
    {info.date ?
      <main>
        <h1>NASA Picture of the Day:</h1>
        <h2>{info.date}</h2>
        <h3>{info.title}</h3>
        <img src={info.url} />
        <p>{info.explanation}</p>
      </main> :
      <div>
        <input type='text' placeholder='api key'
          onChange={(e) => setApiKey(e.target.value)} />
        <button onClick={() => load()}>Cargar imagen</button>
        { error && <p>Error: clave inválida!</p>}
      </div>}
  </>;
}

export default App
