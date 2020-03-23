import React from 'react';
import Divider from '@material-ui/core/Divider';

const CommentItem = ({ classes, comment, buildId }) => {
  return (
    <div>
      User: {comment.username} Date: {comment.date}
      <Divider />
      Comment: {comment.text}
    </div>
  );
};

export default CommentItem;
