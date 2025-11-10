import { render, screen } from "@testing-library/react";
import PageHeader from "../../components/PageHeader";
import { describe, it, expect } from "vitest";

describe("PageHeader Component", () => {
  it("renders the page title correctly", () => {
    render(<PageHeader title="Users" />);
    expect(screen.getByText("USERS")).toBeInTheDocument();
  });
});
