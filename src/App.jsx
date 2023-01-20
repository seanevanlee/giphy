// Imports at the top
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from "./Form/Form";
import GiphyInfo from './GiphyInfo/GiphyInfo';

// API Key = WuROYytKW72swH5KuAfXOMhYb5pPyKiO
// https://api.giphy.com/v1/gifs/random?api_key=WuROYytKW72swH5KuAfXOMhYb5pPyKiO&tag=&rating=g
function App() {
  const [giphy, setGiphy] = useState('')
  useEffect(() => {
    console.log('use effect here')
    const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=WuROYytKW72swH5KuAfXOMhYb5pPyKiO&tag=&rating=g`;
    async function makeApiCall(){
      try {
        const responseJson = await fetch(giphyUrl);
        console.log(responseJson)

        const data = await responseJson.json()
        console.log(data)
// Find the right info in Chrome's devtools
        setGiphy(data.data.images.original)
      } catch(err){
        console.log(Err)
      }
    }
    makeApiCall()
  },[])

  return (
    <div className="App">
      <div>GIFFFSSSS!!</div>
      <Form liftGiphyTitle />
      <GiphyInfo gifData={giphy} />
    </div>
  )
}

export default App;
