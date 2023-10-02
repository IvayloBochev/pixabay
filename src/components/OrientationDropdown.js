/**
 * OrientationDropdown component for selecting the number of results.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.filter - The current filter value.
 * @param {function} props.setFilter - Function to update the filter value.
 * @returns {JSX.Element} JSX element representing the ResultsCountDropdown.
 */
function OrientationDropdown({ filter, setFilter }) {
  return (
    <select
      className="form-select mt-2"
      aria-label="Select orientation type"
      defaultValue="all"
      onChange={(e) => setFilter({ ...filter, orientation: e.target.value })}
    >
      <option value="all">all orientations</option>
      <option value="horizontal">horizontal orientation</option>
      <option value="vertical">vertical orientation</option>
    </select>
  );
}

export default OrientationDropdown