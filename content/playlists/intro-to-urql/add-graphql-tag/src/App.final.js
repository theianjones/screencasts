import React from 'react'
import {useQuery} from 'urql'
import gql from 'graphql-tag'

const courseQuery = gql`
  query courses {
    courses {
      title
    }
  }
`

function App() {
  console.log({courseQuery})
  const [result] = useQuery({
    query: courseQuery,
  })

  if (result.fetching) {
    return 'Loading...'
  } else if (result.error) {
    return 'There was an error :('
  }

  return (
    <div>
      <h1>egghead courses</h1>
      {result && result.data && (
        <ul style={{listStyle: 'none'}}>
          {result.data.courses.map(({title}) => (
            <li
              key={title}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 16,
                fontFamily: 'sans-serif',
                marginBottom: 10,
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
