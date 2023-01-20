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
  const [title, setTitle] = useState('pokemon')

function liftGiphyTitle(title){
  console.log(title)
  setTitle(title)
}

  useEffect(() => {
    console.log('use effect here')
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=WuROYytKW72swH5KuAfXOMhYb5pPyKiO&q=${title}&limit=25&offset=0&rating=g&lang=en`;
    async function makeApiCall(){
      try {
        const responseJson = await fetch(giphyUrl);
        console.log(responseJson)

        const data = await responseJson.json()
        console.log(data)
// Find the right info in Chrome's devtools
        setGiphy(data.data[Math.floor(Math.random()*10)].images.original)
      } catch(err){
        console.log(err)
      }
    }
    makeApiCall()
  },[title])

  return (
    <div className="App">
      <div><strong><b>GIFFFSSSS!!</b></strong></div>
      <Form liftGiphyTitle={liftGiphyTitle} />
      <GiphyInfo gifData={giphy} />
    </div>
  )
}

export default App;
