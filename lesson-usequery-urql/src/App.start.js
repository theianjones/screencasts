import React from "react";

function App() {
  return (
    <div>
      <h1>egghead courses</h1>
      {result.data && (
        <ul style={{ listStyle: "none" }}>
          {result.data.courses.map(({ title, square_cover_url, slug }) => (
            <li
              key={slug}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 24,
                fontFamily: "sans-serif"
              }}
            >
              <img
                src={square_cover_url}
                alt="course image"
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
