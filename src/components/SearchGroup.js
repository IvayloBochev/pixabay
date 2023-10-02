import React from "react";
import SearchBar from "./SearchBar";
import TypeOptionsDropdown from "./TypeOptionsDropdown";
import ResultsCountDropdown from "./ResultsCountDropdown";
import { Button } from "react-bootstrap";

/**
 * Renders a group of search components for filtering images.
 *
 * @param {Object} props - The component's properties.
 * @param {Object} props.filter - The current filter object containing the query and other options.
 * @param {Function} props.setFilter - A function to set the filter for the images.
 * @param {Function} props.handleFilterSubmit - A function to handle the submission of the filter.
 *
 * @returns {JSX.Element} The JSX element representing the search group.
 */
function SearchGroup({ filter, setFilter, handleFilterSubmit }) {
  return (
    <>
      <SearchBar filter={filter} setFilter={setFilter} />
      <TypeOptionsDropdown filter={filter} setFilter={setFilter} />
      <ResultsCountDropdown filter={filter} setFilter={setFilter} />
      <Button className="w-100 mt-2" onClick={handleFilterSubmit}>
        Search
      </Button>
    </>
  );
}

export default SearchGroup;
