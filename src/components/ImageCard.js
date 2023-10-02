import React from "react";
import { Card } from "react-bootstrap";

/**
 * Renders an image card component with information and a view button.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.largeImage - The URL of the large image to display.
 * @param {string} props.type - The type of the image.
 * @param {string} props.tags - The tags associated with the image.
 *
 * @returns {JSX.Element} The JSX element representing the image card.
 */
function ImageCard({ largeImage, type, tags }) {
  return (
    <Card className="w-100">
      <div className="position-relative" style={{ paddingBottom: "75%" }}>
        <img
          src={largeImage}
          alt="alt"
          className="position-absolute w-100 h-100 object-fit-cover"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Type: {type}</h5>
        <p className="card-text text-truncate">{tags}</p>
        <a
          href={largeImage}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View image
        </a>
      </div>
    </Card>
  );
}

export default ImageCard;
