import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { fetchData } from "../../helpers/common";

const SearchDoctor = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getDoctors = async () => {
    try {
      const { ok, data } = await fetchData("/api/doctors");
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);

  const handleSearch = (searchQuery) => {
    const filteredResults = data.filter((result) =>
      result.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResults results={filteredData} />
    </div>
  );
};

export default SearchDoctor;
