import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <List>
                <ListItem>
                    <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                </ListItem>
            </List>
        );

    }
}