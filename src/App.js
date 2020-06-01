import React, { useState, useEffect } from 'react'
import axios from "axios"
const imagesUrl = "https://api.unsplash.com/photos/?page=1&per_page=9&client_id=1kV8nZ5_pV1wBQJB_prZ0Rs5pkpTarBY2-NNW7X-_yg"


export default function App() {

  const [images, updateimages] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const images = await axios(imagesUrl)
      console.log(images)
      console.log(images.data)


      updateimages(images.data)
    }
    apiCall()
  }, [])

  
  return (
    <div>
      <h1>images</h1>
      {images.map(image => <img src={image.urls.small}></img>)}
      
      
      
      
    </div>
  )
}


