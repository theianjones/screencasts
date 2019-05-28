import React from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'

function App() {
  const course_slug = 'usesubscription-example'

  return (
    <div>
      <CommentList />
      <CommentInput />
    </div>
  )
}

export default App
