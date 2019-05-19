import React from 'react';
import ImageView from './ImageView';
import styles from './ListView.module.css';
import { typeAlias } from '@babel/types';

const ListView = (props) => { 
  const renderImages = props.characters.map((character, index) => <ImageView character={character} key={index}/>)
  return (
    <div className={styles.main}>
      {renderImages}
    </div>
  )
}

export default ListView;