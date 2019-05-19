import React from 'react';
import ImageView from './ImageView';
import styles from './ListView.module.css';

const ListView = (props) => { 
  const renderImages = props.characters.map((character, index) => <ImageView character={character} key={character.id}/>)
  return (
    <div className={styles.main}>
      {renderImages}
    </div>
  )
}

export default ListView;