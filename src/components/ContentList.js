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
    <div className="row">
      {content &&
        !contentError &&
        content.map((result) => (
          <div className="col-md-6 p-3">
            <ImageCard
              key={result.id}
              largeImage={result.largeImageURL}
              type={result.type}
              tags={result.tags}
            />
          </div>
        ))}
    </div>
  );
}

export default ContentList;
