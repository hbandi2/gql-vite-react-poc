import { describe, expect, it } from 'vitest'
import { render, screen } from "../../utils/test-utils";
import { TopicContainer } from "../TopicContainer";

describe("<TopicContainer />", () => {
  it("should render topics container", () => {
    render(<TopicContainer>topic content</TopicContainer>);
    expect(screen.getByText("topic content")).toHaveClass("topics-container");
  });
});
