/**
 * Renders a dropdown menu for selecting the type of search results.
 *
 * @param {Object} props - The component's properties.
 * @param {Object} props.filter - The current filter object containing the query and other options.
 * @param {Function} props.setFilter - A function to set the filter for the images.
 * 
 * @returns {JSX.Element} The JSX element representing the type options dropdown.
 */
function TypeOptionsDropdown({ filter, setFilter }) {
  return (
    <select
      className="form-select mt-2"
      aria-label="Select results type"
      defaultValue={"all"}
      onChange={(e) => setFilter({ ...filter, type: e.target.value })}
    >
      <option value="all"> All image types</option>
      <option value="photo">Photos</option>
      <option value="illustration">Illustrations</option>
      <option value="vector">Vectors</option>
    </select>
  );
}

export default TypeOptionsDropdown;
