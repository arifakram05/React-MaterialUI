import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from 'muicss/lib/react/container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import HighlightIcon from '@material-ui/icons/Highlight';


class NewIdea extends Component {

  constructor(props) {
    super(props);
    // component state
    this.state = {
      postAnonymously: true,
      doNotShowName: 'Post anonymously',
      showName: 'Show identity'
    }
    // methods in this class
    this.handleChange = this.handleChange.bind(this);
  }

  // method that will be called after component is rendered
  componentDidMount() {
    console.log('current state is ', this.state.postAnonymously)
  }

  // method that will be called after component is updated
  componentDidUpdate() {
    console.log('state updated to ', this.state.postAnonymously)
  }

  // one of the methods of this class
  handleChange(event) {
    this.setState({ postAnonymously: event.target.checked });
  };

  // render method - one of the lifecycle methods - necessary to override
  render() {

    const formStyles = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    let label;
    if (this.state.postAnonymously) {
      label = this.state.doNotShowName;
    } else {
      label = this.state.showName;
    }

    return (
      <React.Fragment>
        <AppBar position="static" >
          <Toolbar style={{backgroundColor:'#fff', height: '20px'}}>
            <List>
              <ListItem>
              <Avatar>
                <HighlightIcon color="secondary" />
              </Avatar>
              <ListItemText primary="Submit a new idea" />
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
        <Container style={{padding: '30px 50px 50px 50px', height: '100%'}} >
          <form style={formStyles} noValidate autoComplete="off">
            <FormControl fullWidth required>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.postAnonymously}
                      onChange={this.handleChange}
                      value={"Post Anonymously"}
                    />
                  }
                  label="Post Anonymously"
                />
                <TextField
                  id="new_idea_title"
                  label="My idea/suggestion is"
                  fullWidth
                  required
                  multiline
                  margin="normal"
                />
                <TextField
                  id="new_idea_description"
                  label="My idea/suggestion description"
                  fullWidth
                  required
                  multiline
                  rows="4"
                  margin="normal"
                />
                <Button variant="outlined" color="primary" style={{'marginTop': "20px"}}>
                  Submit
                  <Send />
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewIdea;
