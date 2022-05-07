export interface Topic {
  name: string;
  stargazerCount: number;
  relatedTopics?: Topic[];
}

export interface TopicsData {
    topic?: Topic;
}
