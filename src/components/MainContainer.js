import React from 'react';
import ListView from './ListView';

const MainContainer = () => {

  const characters = [
    { "image": "images/luke.jpg", "name": "Luke Skywalker" },
    { "image": "images/darth.jpg", "name": "Darth Vader" },
    { "image": "images/obi.png", "name": "Ob-wan Kenobi" },
    { "image": "images/r2d2.jpg", "name": "R2-D2" }
  ]

  return (
    <div>
      <ListView characters={characters}/>
    </div>
  )

}

export default MainContainer;