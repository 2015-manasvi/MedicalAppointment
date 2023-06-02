import React, { useState } from "react";
import styles from "./Search.module.css";

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter Doctor Name here....."
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
