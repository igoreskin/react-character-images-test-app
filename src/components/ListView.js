import React from 'react';
import { Link } from 'react-router-dom';
import ImageView from './ImageView';
import styles from './ListView.module.css';

const ListView = (props) => { 
  const renderImages = props.characters.map((character) => 
    <Link to={`/${character.id}`} key={character.id}><ImageView character={character} /></Link>)
  return (
    <div className={styles.main}>
      {renderImages}
    </div>
  )
}

export default ListView;