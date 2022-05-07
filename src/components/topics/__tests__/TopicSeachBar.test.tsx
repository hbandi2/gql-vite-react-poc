import { describe, expect, it, vi } from "vitest";
import { render, screen, userEvent } from "../../../utils/test-utils";
import { TopicSeachBar } from "../TopicSeachBar";

describe("<TopicSeachBar />", () => {
  const onSearchMock = vi.fn();
  const renderComponent = (props = {}) => {
    return render(
      <TopicSeachBar onSearch={onSearchMock} isLoading={false} {...props} />
    );
  };

  it("should render topics search bar", () => {
    renderComponent();
    expect(screen.getByLabelText("Search by Keyword")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should disable search button and input", () => {
    renderComponent({
      isLoading: true,
    });
    expect(screen.getByLabelText("Search by Keyword")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  });

  it("should call `onSearch` on button click", () => {
    renderComponent();
    expect(screen.getByLabelText("Search by Keyword")).toBeInTheDocument();

    userEvent.type(screen.getByLabelText("Search by Keyword"), "react");
    userEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(onSearchMock).toBeCalledWith("react");
  });

  it("should call `onSearch` on enter press", () => {
    renderComponent();
    expect(screen.getByLabelText("Search by Keyword")).toBeInTheDocument();

    userEvent.type(screen.getByLabelText("Search by Keyword"), "react{enter}");
    userEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(onSearchMock).toBeCalledWith("react");
  });
});
