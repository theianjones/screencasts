import { useQuery } from 'urql';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';

const allCoursesQuery = gql`
  query Courses($page: Int!) {
    courses(page: $page) {
      title
      id
      http_url
    }
  }
`;

export default function PostList() {
  const [page, setPage] = React.useState(1);
  const [coursesResults] = useQuery({
    query: allCoursesQuery,
    variables: { page },
  });

  if (coursesResults.error) {
    return <ErrorMessage message="Error loading posts." />;
  } else if (coursesResults.loading || !coursesResults.data) {
    return <div>Loading</div>;
  }

  const prevPage = () => (page !== 1 ? setPage(page - 1) : false);
  const nextPage = () => setPage(page + 1);

  const { courses } = coursesResults.data;

  return (
    <section>
      <ul>
        {courses.map((course, index) => (
          <li key={course.id}>
            <div>
              <span>{index + 1 + (page - 1) * 10}. </span>
              <a href={course.http_url}>{course.title}</a>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={page <= 1}>
          previous
        </button>
        <button onClick={nextPage}>next</button>
      </div>
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button {
          margin-right: 10px;
        }
        button:hover {
          cursor: pointer;
        }
        button:disabled,
        button[disabled] {
          background-color: gray;
          opacity: 50%;
          cursor: inherit;
        }
      `}</style>
    </section>
  );
}
