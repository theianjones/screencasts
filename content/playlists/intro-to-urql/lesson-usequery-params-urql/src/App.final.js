import React, {useState} from 'react'
import {useQuery} from 'urql'

const courseQuery = `
  query courses($offset: Int) {
    courses(offset: $offset, limit: 2) {
      title
    }
  }
`

function App() {
  const [offset, setOffset] = useState(0)
  const [result] = useQuery({
    query: courseQuery,
    variables: {
      offset,
    },
  })

  if (result.error) {
    return 'There was an error :('
  }

  return (
    <div>
      <h1>egghead courses</h1>
      <button onClick={() => setOffset(offset + 2)}>Next Page</button>
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
