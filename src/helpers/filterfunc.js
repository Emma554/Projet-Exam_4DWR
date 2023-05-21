export default function filterfunc(filter) {
    return function (post) {
      return (
        post.title.toLowerCase().includes(filter.toLowerCase()) || 
        post.body.toLowerCase().includes(filter.toLowerCase())
      )
    }
  }