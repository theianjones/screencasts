import React from 'react'
import {useMutation} from 'urql'

const addCourse = `
  mutation addCourse($slug: String!, $title: String!){
    insert_courses(objects: {slug: $slug, title: $title}) {
      returning {
        title
        slug
      }
    }
  }
`

const App = () => {
  const [res, executeMutation] = useMutation(addCourse)
  console.log({res})

  return (
    <button
      onClick={() =>
        executeMutation({slug: 'new-course', title: 'New Course!'})
      }
    >
      Add something!
    </button>
  )
}

export default App
