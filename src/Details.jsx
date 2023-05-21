import React from "react"
import { useParams } from "react-router-dom"
import usePost from "./hooks/usePost"

const Details = () => {
  const { id } = useParams()
  const {data: post, isLoading, error} = usePost(id);

  return (
    <div>
      {isLoading && <div>Chargement...</div>}
      {error && <div>{error}</div>}
      {
        post && (
          <div>
            <ul>
              <li className="list-group-item active">{post.title}</li>
              <li className="list-group-item">{post.body}</li>
            </ul>
          </div>
        )
      }
    </div>
  )
  
  
}

export default Details