import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';
import Panel from 'muicss/lib/react/panel';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import styles from '../../style/style.css';
import Comments from '../components/Comments';

class IdeaDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
    };

    handleSubmit() {
        console.log('Comment to be submitted is ', this.state.comment);
        this.setState({ comment: '' });
    }

    render() {

        let comments;
        if (this.props.idea.comments > 0) {
            comments = (
                <div>
                    <Typography color="secondary" style={{ 'marginTop': '20px' }} gutterBottom>
                        Comments
                    </Typography>
                    <div style={{ 'height': '300px', 'overflow': 'scroll' }}>
                        <Comments />
                    </div>
                    <Divider />
                </div>
            );
        }

        return (
            <React.Fragment>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <Avatar className={styles.ideaDetailsBackIcon} onClick={this.props.goBack}>
                        <ChevronLeftIcon />
                    </Avatar>
                    <div>
                        <ThumbsUpIcon style={{ margin: '0 10', cursor: 'hand' }} onClick={() => { console.log('liked'); }} />
                        <ThumbsDownIcon style={{ margin: '0 10', cursor: 'hand' }} onClick={() => { console.log('disliked'); }} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Chip avatar={<Avatar>{`${this.props.idea.likes}`}</Avatar>} label="Likes" style={{ marginRight: '10px' }} />
                    <Chip avatar={<Avatar>{`${this.props.idea.dislikes}`}</Avatar>} label="DisLikes" style={{ marginRight: '10px' }} />
                    <Chip avatar={<Avatar>{`${this.props.idea.comments}`}</Avatar>} label="Comments" />
                </div>

                <Panel style={{ 'marginTop': '10px' }}>
                    <Typography variant="headline" color="primary" gutterBottom classes={{ root: styles.capitalize }}>
                        {this.props.idea.idea}
                    </Typography>
                    <Typography style={{ margin: '25px 0 25px 0' }} variant="subheading" gutterBottom>
                        {this.props.idea.description}
                    </Typography>
                    <Divider />
                    {comments}
                    <div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
                        <div style={{ 'flex': '0 0 75%' }}>
                            <TextField
                                id="postComment"
                                label="Post a comment"
                                name="postComment"
                                value={this.state.comment}
                                onChange={this.handleChange}
                                fullWidth
                                multiline
                                rows="3"
                            />
                        </div>

                        <div style={{ 'flex': '0 0 5%' }} >
                        </div>

                        <div style={{ 'flex': '0 0 20%', 'justifyContent': 'center', 'flexDirection': 'column', display: 'flex' }}>
                            <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
                                Submit
                                <Send />
                            </Button>
                        </div>
                    </div>
                </Panel>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetails);
