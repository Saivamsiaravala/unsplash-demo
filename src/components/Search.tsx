import { useState } from "react";
import Results from "./Results";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(query);
  };
  return (
    <>
      <div className="query">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className="input input-search"
        />
        <button type="submit" className="btn btn-search" onClick={handleSearch}>
          <FaSearch className="icon" />
        </button>
      </div>
      {searchQuery && <Results query={searchQuery} />}
    </>
  );
};

export default Search;
