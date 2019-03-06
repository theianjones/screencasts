import React from 'react'
import {useQuery} from 'urql'

const courseQuery = `
  query courses {
    courses {
      title
    }
  }
`

function App() {
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
