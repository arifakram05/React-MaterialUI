import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

class NewIdea extends Component {

  constructor(props) {
    super(props);

    // component state
    this.state = {
      postAnonymously: true,
      doNotShowName: 'Post anonymously',
      showName: 'Show identity'
    }

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
      <form style={formStyles} noValidate autoComplete="off">
        <FormControl fullWidth required>
          <FormGroup row>
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

            <FormControlLabel
              control={
                <Switch
                  checked={this.state.postAnonymously}
                  onChange={this.handleChange}
                  value="checkedA"
                />
              }
              label={label}
            />

            <Button color="primary">
              Submit
              <Send />
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    );

  }

}

export default NewIdea;
