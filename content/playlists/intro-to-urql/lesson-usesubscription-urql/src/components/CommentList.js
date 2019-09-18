import React from 'react'

function CommentList({comments = []}) {
  if (comments.length === 0) {
    return <div>No Comments</div>
  }

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={`${comment.text}-${index}`}>{comment.text}</li>
      ))}
    </ul>
  )
}

export default CommentList
