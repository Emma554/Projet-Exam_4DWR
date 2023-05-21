import { useEffect, useState } from "react";
import api from "../helpers/api";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    !isMounted &&
    api.getPosts().then((json) => {
        setPosts(json);
        setIsMounted(true);
      });
  }, [isMounted]);

  return (
    <div>
      {posts && posts.map((post, index) => (
        <ul className="list-group" key={index}>
          <li className="list-group-item disabled">{post.id}</li>
          <li className="list-group-item active">{post.title}</li>
          <li className="list-group-item">{post.body}</li>
          <li className="list-group-item">
              <Link to={`/${post.id}`}>Détails</Link>
          </li><br></br>
        </ul>
      ))}
    </div>
  );

};
export default Post;