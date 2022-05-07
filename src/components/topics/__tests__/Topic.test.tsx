import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../../utils/test-utils";
import { Topic } from "../Topic";

describe("<Topic />", () => {
  const onClickMock = vi.fn();
  const renderComponent = (props = {}) => {
    return render(
      <Topic name="react" stargazerCount={5} onClick={onClickMock} {...props} />
    );
  };

  it("should render topic", () => {
    renderComponent();
    expect(screen.getByText("react")).toBeInTheDocument();
  });
});
