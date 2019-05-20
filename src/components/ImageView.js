import React from 'react';
import styles from './ImageView.module.css'

const ImageView = (props) => {
  // console.log(props)
  return (
    <div className={styles.image}>
      <img src={props.character.image} alt={props.character.name}/>
    </div>
  )
}

export default ImageView;