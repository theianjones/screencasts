import React from 'react'
import {useQuery} from 'urql'

const countriesQuery = `
  query allCountries {
    countries {
      name
      emoji
      code
    }
  }
`

function App() {
  const [result] = useQuery({
    query: countriesQuery,
  })

  if (result.fetching) {
    return 'Loading...'
  } else if (result.error) {
    return 'There was an error :('
  }

  return (
    <div>
      <h1>countries</h1>
      {result && result.data && (
        <ul style={{listStyle: 'none'}}>
          {result.data.countries.map(({name, emoji}) => (
            <li
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 16,
                fontFamily: 'sans-serif',
                marginBottom: 10,
              }}
            >
              {name}
              <span>{emoji}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
