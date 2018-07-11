import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

export default class SubmitNewIdea2 extends React.Component {
  render() {
    return (
      <Form>
        <legend>Title</legend>
        <Input label="Required Text Field" required={true} />
        <Input label="Required Email Address" type="email" floatingLabel={true} required={true} />
        <Textarea label="Required Textarea" floatingLabel={true} required={true} />
        <Input label="Email Address" type="email" defaultValue="Validation error" />
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}
