import { useRef } from "react";
import { Form } from "react-bootstrap";

/**
 * Renders a search bar component for filtering images.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.setFilter - A function to set the filter for the images.
 * @param {Object} props.filter - The current filter object containing the query.
 * @param {string} props.filter.query - The search query string.
 *
 * @returns {JSX.Element} The JSX element representing the search bar.
 */
function SearchBar({ setFilter, filter }) {
  const searchRef = useRef();

  return (
    <Form>
      <Form.Group id="search" className="pt-2">
        <Form.Control
          type="textarea"
          ref={searchRef}
          required
          placeholder="Enter search image terms (the default search is car)"
          onChange={(e) =>
            setFilter({
              ...filter,
              query: e.target.value
                .split(" ")
                .filter((x) => !!x)
                .join("+"),
            })
          }
        ></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
