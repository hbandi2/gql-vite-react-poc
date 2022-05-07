import { useState } from "react";
import { useQuery } from "@apollo/client";
import Typography from '@mui/material/Typography';

import { TopicContainer } from "../containers/TopicContainer";
import { Topics } from "../components/topics/Topics";
import { relatedTopicsByTerm } from "../graphql/queries/relatedTopicsByTerm";
import { TopicsData } from "../types/topics";

console.log('KEY----', import.meta.env.VITE_REACT_APP_GITHUB_API_TOKEN);

export function TopicsPage() {
  const [term, setTerm] = useState("react");
  const { loading, error, data } = useQuery<TopicsData>(relatedTopicsByTerm, {
    variables: { term },
  });

  // TODO We could have page specific context to share above values when needed, instead of passing props down to component tree
  return (
    <TopicContainer>
     <Typography component="h1" variant="h4" my={5}>
        Search By Github Topic
      </Typography>
      <Topics
        currentTopic={term}
        data={data}
        error={error}
        isLoading={loading}
        updateTerm={setTerm}
      />
    </TopicContainer>
  );
}
