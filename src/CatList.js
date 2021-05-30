// write your CatList component here
import React from 'react'

const CatList = (props) => {
  // console.log("CatList", props)
  const catimgs = props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} />)
  return (
    <div>
      {catimgs}
    </div>
  )
}

export default CatList
