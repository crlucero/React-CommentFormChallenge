import React from 'react';

export default function Comment(props) {
  const { message, name, time } = props.comment;

  return (
    <div className="mb-3">
      <div className="p-2 shadow-sm rounder bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        <hr />
        {message}
      </div>
    </div>
  );
}
