import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    loaction: "",
    maxPrice: null,
    minPrice: null,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="search.png" alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
