import React from 'react'
import {useMutation} from 'urql'

const addCommentToCourse = `
  mutation addCommentToCourse($course_slug: String!, $text: String!){
    insert_comments(objects: {course_slug:$course_slug, text:$text}){
      returning {
        id
        text
      }
    }
  }
`

const CommentInput = () => {
  const [text, setText] = React.useState('')
  const [res, executeMutation] = useMutation(addCommentToCourse)
  const course_slug = 'usesubscription-example'

  const handleInputChange = e => {
    setText(e.target.value)
  }

  return (
    <>
      <label>
        Comment:
        <input
          type="text"
          name="comment_text"
          value={text}
          onChange={handleInputChange}
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          executeMutation({course_slug, text})
          setText('')
        }}
      >
        Add Comment
      </button>
    </>
  )
}

export default CommentInput
