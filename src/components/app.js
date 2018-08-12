import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import HomePage from './HomePage';

const styles = {
  headerStyle: {
    height: '195px',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
    backgroundColor: '#1EBEA1'
  },
  headingStyle: {
    marginTop: '27px',
    fontSize: '24px',
    display: 'inherit',
    textAlign: 'center',
    color: '#FFF',
  },
  bodyStyle: {
    overflow: 'hidden',
    margin: '0',
    height: '100%',
    width: '100%',
  }
};

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <div style={styles.bodyStyle}>
          <div style={styles.headerStyle}>
          </div>
          <div style={styles.headingStyle}>
            IBOX
        </div>
          <Container>
            <HomePage />
          </Container>
        </div>
      </React.Fragment>
    );
  }

}
