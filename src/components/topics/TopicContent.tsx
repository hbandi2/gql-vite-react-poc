import { Alert, Box, List } from "@mui/material";

import { Topic as TopicType } from "../../types/topics";
import { Topic } from "./Topic";

interface Props {
  topic?: TopicType;
  currentTopic: string;
  onTopicClick: (topic: string) => void;
}

function getTopicInfo(currentTopic: string, topic?: TopicType) {
  if (topic) {
    return `Topic "${topic.name}" has ${
      topic.stargazerCount
    } stargazer count with ${topic.relatedTopics?.length ?? 0} related topics.`;
  }
  return `Topic ${currentTopic} has not found.`;
}

export function TopicContent({ topic, currentTopic, onTopicClick }: Props) {
  return (
    <Box className="topic-content" mt={3}>
      <Alert severity="info" className="topic-search-info">
        {getTopicInfo(currentTopic, topic)}
      </Alert>
      {!!topic?.relatedTopics?.length && (
        <List className="related-topic-list">
          {topic.relatedTopics.map((t) => (
            <Topic
              key={t.name}
              name={t.name}
              stargazerCount={t.stargazerCount}
              onClick={onTopicClick}
            />
          ))}
        </List>
      )}
    </Box>
  );
}
