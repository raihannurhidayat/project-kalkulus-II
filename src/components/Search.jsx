import React, { useState } from "react";

const Search = ({ handleSeachSuku, deret }) => {
  const [searchSuku, setSearchSuku] = useState("");

  const handleChange = (e) => {
    setSearchSuku(e.target.value);
  };
  return (
    <div class="search">
      <input
        placeholder="Masukan Nilai N"
        onChange={handleChange}
        value={searchSuku}
        type="text"
      />
      <button
        onClick={() => {
          try {
            handleSeachSuku(searchSuku, deret);
          } catch (error) {
            console.log({ error });
          } finally {
            setSearchSuku("");
          }
        }}
      >
        Go
      </button>
    </div>
  );
};

export default Search;
