import React, { Component } from 'react';
import axios from 'axios';
import ListView from './ListView';
import styles from './MainContainer.module.css';


class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get('characters.json')
    .then(response => {
      this.setState({ characters: response.data }, console.log(this.state.characters))
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div className={styles.wrapper}>
      <ListView characters={this.state.characters} />
        {console.log(this.state.characters)}
    </div>
  )
  }

}

export default MainContainer;