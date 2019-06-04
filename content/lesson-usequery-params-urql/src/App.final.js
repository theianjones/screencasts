import React, {useState} from 'react'
import {useQuery} from 'urql'

const courseQuery = `
  query courses($page: Int) {
    courses(page: $page) {
      title
    }
  }
`

function App() {
  const [page, setPage] = useState(1)
  const [result] = useQuery({
    query: courseQuery,
    variables: {
      page,
    },
  })

  if (result.error) {
    return 'There was an error :('
  }

  return (
    <div>
      <h1>egghead courses</h1>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
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
