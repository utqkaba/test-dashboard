import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { describe, it, expect } from "vitest";

describe("Sidebar Component", () => {
  it("renders sidebar links correctly", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const nav = screen.getByRole("navigation");
    const navScope = within(nav);

    expect(navScope.getByText(/dashboard/i)).toBeInTheDocument();
    expect(navScope.getByText(/users/i)).toBeInTheDocument();
    expect(navScope.getByText(/roles/i)).toBeInTheDocument();
    expect(navScope.getByText(/my profile/i)).toBeInTheDocument();
    expect(navScope.getByText(/log out/i)).toBeInTheDocument();
  });

  it("highlights the active route", () => {
    // Test için '/users' routeunu aktif yapıyoruz
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Sidebar />
      </MemoryRouter>
    );

    const usersLink = screen.getByText(/users/i).closest("a");

    // usersLink'in aktif olduğunu belirten sınıf içerip içermediğini kontrol ediyoruz
    expect(usersLink).toHaveClass(
      "bg-linear-to-r",
      "from-stone-100",
      "to-stone-300"
    );
  });

  it("matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    // Sidebar'in HTML yapısını snapshot olarak kaydeder
    expect(container).toMatchSnapshot();
  });
});
