import { Link } from "react-router-dom";

/**
 * Renders a component suggesting a redirection with a provided message and link.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} props.text - The message suggesting redirection.
 * @param {string} props.linkText - The text for the redirect link.
 * @param {string} props.route - The route to redirect to.
 * @returns {JSX.Element} The JSX element representing the redirection suggestion component.
 */
function RedirectSuggestion({ text, linkText, route }) {
  return (
    <div className="w-100 text-center mt-2">
      {text && text} <Link to={route}>{linkText}</Link>
    </div>
  );
}

export default RedirectSuggestion;
