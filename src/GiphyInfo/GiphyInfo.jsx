import React from 'react'

function GiphyInfo({gifData}){

  return (
    <div className='giphy-data'>
      <img src={gifData.url} alt=''></img>
    </div>
  )
}

export default GiphyInfo