import React from "react";

function App() {
  const result = null;

  return (
    <div>
      <h1>egghead courses</h1>
      {result && result.data && (
        <ul style={{ listStyle: "none" }}>
          {result.data.courses.map(({ title, square_cover_url, slug }) => (
            <li
              key={slug}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 16,
                fontFamily: "sans-serif",
                marginBottom: 10
              }}
            >
              <img
                src={square_cover_url}
                alt="course"
                width="80"
                height="80"
                style={{
                  marginRight: 20
                }}
              />
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
