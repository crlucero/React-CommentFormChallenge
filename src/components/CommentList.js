import React from 'react';
import Comment from './Comment';

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-warning mx-1">
          {props.comments.length}
        </span>
        Comment{props.comments.length > 1 ? 's' : ''}
      </h5>
      {/* If there are no comments, shoe 'Be the first to comment' */}
      {props.comments.length === 0 ? (
        <div className="alert text-center alert-info">
          Comment before someone else!
        </div>
      ) : null}
      {/* Loop through list of comments */}
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
