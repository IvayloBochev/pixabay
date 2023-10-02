/**
 * Renders a dropdown component for selecting the number of results.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.filter - The filter object containing query, type, and results count.
 * @param {Function} props.setFilter - A function to update the filter state.
 * @returns {JSX.Element} The JSX element representing the results count dropdown component.
 */

function ResultsCountDropdown({ filter, setFilter }) {
  return (
    <select
      className="form-select mt-2"
      aria-label="Select number of results"
      defaultValue="4"
      onChange={(e) => setFilter({ ...filter, resultsCount: e.target.value })}
    >
      <option value="4">4 images</option>
      <option value="8">8 images</option>
      <option value="16">16 images</option>
    </select>
  );
}

export default ResultsCountDropdown;
