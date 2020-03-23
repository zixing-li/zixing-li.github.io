import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CommentItem from './CommentItem';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddCommentModal from '../common/AddCommentModal';

const Comments = ({ classes, build }) => {
  return (
    <ExpansionPanel className={classes.expanded}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Comments ({build.comments.length || 0})
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Divider light />
        <Typography>
          {build.comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              buildId={build._id}
              classes={classes}
            />
          ))}
        </Typography>
        <IconButton
          //   value={build}
          data-toggle="modal"
          data-target={`#addComment${build._id}`}
        >
          <BorderColorIcon />
        </IconButton>
      </ExpansionPanelDetails>
      <AddCommentModal index={build._id} />
    </ExpansionPanel>
  );
};

export default Comments;
