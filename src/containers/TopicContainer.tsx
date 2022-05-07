import { ReactNode } from "react";
import { Container } from "@mui/material";

interface Props {
  children: ReactNode;
}

export function TopicContainer({ children }: Props) {
  return (
    <Container className="topics-container">
      {children}
    </Container>
  );
}
