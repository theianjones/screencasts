import React from 'react'
import {useQuery} from 'urql'

const courseQuery = `
  query courses($offset: Int!) {
    courses(limit: 2, offset: $offset) {
      title
    }
  }
`

function App() {
  const [offset, setOffset] = React.useState(0)
  const [result] = useQuery({
    query: courseQuery,
    variables: {
      offset,
    },
  })

  if (result.fetching) {
    return 'Loading...'
  } else if (result.error) {
    return 'There was an error :('
  }

  return (
    <div>
      <button onClick={() => setOffset(offset + 1)}>Next Page</button>
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
