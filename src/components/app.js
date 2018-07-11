import React, { Component } from 'react';
import SimpleList from './SimpleList';
import SubmitNewIdea from './SubmitNewIdea';
import SubmitNewIdea2 from './SubmitNewIdea2';
import SubmitNewIdea3 from './SubmitNewIdea3';
import Paper from '@material-ui/core/Paper';
import Container from 'muicss/lib/react/container';
import IconTabs from './IconTabs';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>
          {/*
          <SimpleList />
          <SubmitNewIdea />
          <br />
          <SubmitNewIdea2 />
          <br />
          <SubmitNewIdea3 />
          <br/>
          */}
          <IconTabs />
      </Container>
    );
  }

}
