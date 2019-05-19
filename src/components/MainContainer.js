import React from 'react';
import ListView from './ListView';
import ImageDisplayView from './ImageDisplayView';
import styles from './MainContainer.module.css';

const MainContainer = () => {

  const characters = [
    { "id": "0", "image": "images/luke.jpg", "name": "Luke Skywalker" },
    { "id": "1", "image": "images/darth.jpg", "name": "Darth Vader" },
    { "id": "2", "image": "images/obi.png", "name": "Ob-wan Kenobi" },
    { "id": "3", "image": "images/r2d2.jpg", "name": "R2-D2" }
  ]

  return (
    <div className={styles.wrapper}>
      <ListView characters={characters} />
    </div>
  )

}

export default MainContainer;