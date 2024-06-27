import { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import useFetch from "./components/useFetch";

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState("");
  const { data, loading, error } = useFetch(url);

  return (
    <div className="App">
      <Name name="test" age="23" />
      <>
        <div onClick={() => setUrl(URLS.USERS)}>
          <input
            type="radio"
            name="options"
            id="users"
            checked={url === URLS.USERS}
          ></input>
          <label htmlFor="users">Users</label>
        </div>
        <div onClick={() => setUrl(URLS.POSTS)}>
          <input
            type="radio"
            name="options"
            id="posts"
            checked={url === URLS.POSTS}
          ></input>
          <label htmlFor="posts">Posts</label>
        </div>
        <div onClick={() => setUrl(URLS.COMMENTS)}>
          <input
            type="radio"
            name="options"
            id="comments"
            checked={url === URLS.COMMENTS}
          ></input>
          <label htmlFor="comments">Comments</label>
        </div>
      </>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {Array.isArray(data) && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
