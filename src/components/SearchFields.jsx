const SearchFields = ({ searchValue, setSearchValue }) => {
    return (
      <div className="inputContainer">
        <input
          id="inputPost"
          type="text"
          value={searchValue}
          placeholder=" "
          onChange={e => setSearchValue(e.target.value)}
        />
        <label htmlFor="inputPost" >
          <p>Rechercher un post</p>
        </label>
      </div>
    )
  }
  
  export default SearchFields