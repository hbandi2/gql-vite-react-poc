import { Stack, Alert } from "@mui/material";
import { TopicsData } from "../../types/topics";
import { TopicLoader } from "./TopicLoader";
import { TopicContent } from "./TopicContent";
import { TopicSeachBar } from "./TopicSeachBar";

interface Props {
  currentTopic: string;
  isLoading: boolean;
  updateTerm: (term: string) => void;
  data?: TopicsData;
  error?: { message?: string };
}

export function Topics({
  currentTopic,
  data,
  error,
  isLoading,
  updateTerm,
}: Props) {
  return (
    <Stack>
      <TopicSeachBar isLoading={isLoading} onSearch={updateTerm} />
      {isLoading && <TopicLoader />}
      {error?.message && <Alert severity="error">{error?.message}</Alert>}
      {data && (
        <TopicContent
          currentTopic={currentTopic}
          topic={data.topic}
          onTopicClick={updateTerm}
        />
      )}
    </Stack>
  );
}
