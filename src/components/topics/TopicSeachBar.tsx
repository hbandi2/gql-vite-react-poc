import { useState, KeyboardEvent } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  isLoading: boolean;
  onSearch: (term: string) => void;
}

interface SearchBtnAdornmentProps {
  isLoading: boolean;
  onClick: () => void;
}

function SearchBtnAdornment({ isLoading, onClick }: SearchBtnAdornmentProps) {
  return (
    <InputAdornment position="end">
      <Button
        variant="contained"
        component="button"
        startIcon={<SearchIcon />}
        disabled={isLoading}
        onClick={onClick}
      >
        Search
      </Button>
    </InputAdornment>
  );
}

export function TopicSeachBar({ isLoading, onSearch }: Props) {
  const [searchInput, setSearchInput] = useState("");

  const onSearchHandler = () => {
    onSearch(searchInput);
    setSearchInput("");
  };

  const onEnterPress = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
        onSearchHandler();
    }
  }

  return (
    <TextField
      id="topic-search-input"
      label="Search by Keyword"
      variant="outlined"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      disabled={isLoading}

      InputProps={{
        onKeyPress: onEnterPress,
        endAdornment: (
          <SearchBtnAdornment isLoading={isLoading} onClick={onSearchHandler} />
        ),
      }}
    />
  );
}
