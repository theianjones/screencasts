import React from 'react'

function App() {
  const result = null

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
