import ImageCard from "./ImageCard";

/**
 * Renders a list of content items as ImageCards.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.content - An array of content items to be displayed.
 * @param {boolean} props.contentError - Indicates if there was an error fetching the content.
 * 
 * @returns {JSX.Element} The JSX element representing the content list.
 */
function ContentList({ content, contentError }) {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-between mt-4 mb-4">
      {content &&
        !contentError &&
        content.map((result) => (
          <ImageCard
            key={result.id}
            largeImage={result.largeImageURL}
            type={result.type}
            tags={result.tags}
            S
          />
        ))}
    </div>
  );
}

export default ContentList;
