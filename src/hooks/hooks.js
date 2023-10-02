import { useState } from "react";

/**
 * Custom hook for handling filter submission and fetching content from Pixabay API.
 *
 * @param {Object} filter - The filter object containing query, type, and results count.
 * @param {string} filter.query - The search query string.
 * @param {string} filter.type - The type of content to search for.
 * @param {number} filter.resultsCount - The number of results to fetch.
 * @param {string} filter.orientation - The orientation to search for.
 * 
 */
export const useHandleFilterSubmit = (filter) => {
  const [content, setContent] = useState();
  const [contentError, setContentError] = useState("");

  /**
   * Handles the filter submission, fetches content from Pixabay API, and updates state.
   *
   * @async
   * @param {Event} e - The submit event.
   */
  async function handleFilterSubmit(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_PIXABAY_URL}/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${filter.query}&image_type=${filter.type}&per_page=${filter.resultsCount}&orientation=${filter.orientation}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setContent(data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
      setContentError("Error fetching data");
    }
  }

  return { content, contentError, handleFilterSubmit };
};
