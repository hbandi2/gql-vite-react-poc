import { gql } from '@apollo/client';

// TODO: yet to know more about this syntax and best way to format this
export const relatedTopicsByTerm = gql(`
query($term: String!){
  topic(name: $term){ 
    name
     relatedTopics (first: 10) {
       name
       stargazerCount
     }
     stargazerCount
   }
}`);