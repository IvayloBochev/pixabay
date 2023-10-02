import { useState } from "react";
import { useHandleFilterSubmit } from "../../hooks/hooks";
import ContentList from "../../components/ContentList";
import SearchGroup from "../../components/SearchGroup";
import ProfileSection from "../../components/ProfileSection";
import Moto from "../../components/Moto";

/**
 * Renders the dashboard component with a profile section, search group, and content list.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the dashboard.
 */
function Dashboard() {
  const [filter, setFilter] = useState({
    query: "car",
    type: "all",
    resultsCount: "4",
  });

  const {
    content,
    error: contentError,
    handleFilterSubmit,
  } = useHandleFilterSubmit(filter);

  return (
    <>
      <ProfileSection />

      <Moto />

      <SearchGroup
        filter={filter}
        setFilter={setFilter}
        handleFilterSubmit={handleFilterSubmit}
      />

      <ContentList content={content} contentError={contentError} />
    </>
  );
}

export default Dashboard;
