import {List, ListItem, Skeleton} from '@mui/material';

export function TopicLoader() {
  return (
   <List className='topic-loader'>
    <ListItem><Skeleton animation="wave" height={50} width="100%" /></ListItem>
    <ListItem><Skeleton animation="wave" height={50} width="100%" /></ListItem>
    <ListItem><Skeleton animation="wave" height={50} width="100%" /></ListItem>
  </List>
  );
}