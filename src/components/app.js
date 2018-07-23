import React, { Component } from 'react';
import SimpleList from './SimpleList';
import SubmitNewIdea from './SubmitNewIdea';
import SubmitNewIdea3 from './SubmitNewIdea3';
import Paper from '@material-ui/core/Paper';
import Container from 'muicss/lib/react/container';
import HomePage from './HomePage';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
          <HomePage />
      </Container>
    );
  }

}
