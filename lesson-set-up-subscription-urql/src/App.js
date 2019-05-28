import React from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import {useSubscription} from 'urql'

const commentSubscriptionQuery = `
subscription subscribeToComments($course_slug: String!) {
  comments(where: {course_slug: {_eq: $course_slug}}){
    text
  }
}`

function App() {
  const course_slug = 'usesubscription-example'

  const [res] = useSubscription({
    query: commentSubscriptionQuery,
    variables: {course_slug},
  })

  if (res.error !== undefined) {
    return <div>{res.error.message}</div>
  }

  if (!res.fetching && res.data === undefined) {
    return <p>No new messages</p>
  }

  return (
    <div>
      <CommentList comments={res.data.comments} />
      <CommentInput />
    </div>
  )
}

export default App
