import { Chip, ListItem, ListItemButton, ListItemText } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";

interface Props {
  name: string;
  stargazerCount: number;
  onClick: (topic: string) => void;
}
export function Topic({ name, stargazerCount, onClick }: Props) {
  const descriptiveText = `${name} topic with stargazer count ${stargazerCount}`;
  
  const onClickHandler = () => {
    onClick(name);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        component="button"
        onClick={onClickHandler}
        aria-label={descriptiveText}
      >
        <ListItemText primary={name} />
        <Chip avatar={<StarsIcon />} label={stargazerCount} />
      </ListItemButton>
    </ListItem>
  );
}
