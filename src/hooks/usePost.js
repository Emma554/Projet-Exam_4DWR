import { useEffect, useState } from "react"
import filterfunc from "../helpers/filterfunc"

let localCache = []

const usePost = (filter = "") => {
  const [posts, setPost] = useState([])
  const [status, setStatus] = useState("unloaded")
  useEffect(() => {
    if (localCache.length === 0) {
        requestPosts()
    } else if (localCache.length > 0) {
        setPost(localCache.filter(filterfunc(filter)))
      setStatus("loaded")
    }
    // eslint-disable-line react-hooks/exhaustive-deps
    async function requestPosts() {
      const apiRep = await fetch("https://jsonplaceholder.typicode.com/posts/")
      const json = await apiRep.json()
      setPost(json.filter(filterfunc(filter)))
      localCache = json || []
      setStatus("loaded")
    }
  }, [filter])
  return [status, posts]
}

export default usePost