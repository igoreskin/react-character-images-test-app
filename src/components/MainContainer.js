import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListView from './ListView';
import ImageDisplayView from './ImageDisplayView';
import styles from './MainContainer.module.css';

const MainContainer = () => {

  const characters = [
    { "image": "images/luke.jpg", "name": "Luke Skywalker" },
    { "image": "images/darth.jpg", "name": "Darth Vader" },
    { "image": "images/obi.png", "name": "Ob-wan Kenobi" },
    { "image": "images/r2d2.jpg", "name": "R2-D2" }
  ]

  return (
    <div className={styles.wrapper}>
      <Route exact path='/' render={() => <ListView characters={characters} />} />
      <Route path='/:id' render={() => <ImageDisplayView /> } />


    </div>
  )

}

export default MainContainer;