function api() {
    const getPosts = () => {
      return fetch("https://jsonplaceholder.typicode.com/posts/", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
        getPosts,
    };
  }
  
  export default api();

  