import React, { Component } from 'react';
import axios from 'axios';
import styles from './ImageDIsplayView.module.css';

class ImageDisplayView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.url.charAt(this.props.match.url.length - 1);
    axios.get('characters.json')
      .then(response => {
        this.setState({
          character: response.data.find(el => el.id === id)
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.character.id)
    return(
      <div className={styles.wrapper}>
        <img src={this.state.character.image} alt={this.state.character.name}/>
        <div className={styles.name}>{this.state.character.name}</div>
      </div>
    )
  }

}

export default ImageDisplayView;