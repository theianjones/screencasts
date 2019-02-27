import React from "react";
import { useQuery } from "urql";

const courseQuery = `
  query Courses {
    courses {
      title
      square_cover_url
      slug
    }
  }
`;

function App() {
  const [result] = useQuery({
    query: courseQuery
  });

  if (result.fetching) {
    return "Loading...";
  } else if (result.error) {
    return `There was an error: ${result.error}`;
  }

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
                fontSize: 16,
                fontFamily: "sans-serif",
                marginBottom: 10
              }}
            >
              <img
                src={square_cover_url}
                alt="course"
                width="50"
                height="50"
                style={{
                  marginRight: 10
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
