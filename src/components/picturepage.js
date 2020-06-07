import React from 'react'
import { useParams } from "react-router-dom"


function Picturepage(props) {
  const params = useParams()
  const idFind = props.images.find(id => id.id === params.id)
  console.log(idFind)
  console.log(params)
  return (
    <div className="individual">
      {idFind && <img src={idFind.urls.small} />}
      
    </div>
  )
}

export default Picturepage