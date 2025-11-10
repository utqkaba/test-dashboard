import { render, screen, fireEvent } from "@testing-library/react";
import Users from "../../../pages/Users";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the fetch API
const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    website: "hildegard.org",
    address: {
      city: "Gwenborough",
      street: "Kulas Light",
      zipcode: "92998-3874",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593",
    website: "anastasia.net",
    address: {
      city: "Wisokyburgh",
      street: "Victor Plains",
      zipcode: "90566-7771",
    },
  },
];

describe("Users Page", () => {
  beforeEach(() => {
    // fetch'i mocklamak
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUsers),
      })
    );
  });

  it("renders users after fetching", async () => {
    render(<Users />);

    // Loading state görünmeli
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();

    // Kullanıcılar render olduktan sonra kontrol
    expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(await screen.findByText(/Ervin Howell/i)).toBeInTheDocument();
  });

  it("filters users by name", async () => {
    render(<Users />);

    // Search input'u async olarak al
    const input = await screen.findByPlaceholderText(/search by name/i);

    fireEvent.change(input, { target: { value: "Leanne" } });

    // Filtrelenen kullanıcıları kontrol et
    expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ervin Howell/i)).toBeNull();
  });

  it("expands user details on click", async () => {
    render(<Users />);

    const userCard = await screen
      .findByText(/Leanne Graham/i)
      .then((textEl) => textEl.closest("div"));

    fireEvent.click(userCard);

    expect(screen.getByText(/@Bret/i)).toBeInTheDocument();
    expect(screen.getByText(/Sincere@april.biz/i)).toBeInTheDocument();
    expect(screen.getByText(/1-770-736-8031/i)).toBeInTheDocument();
    expect(screen.getByText(/hildegard.org/i)).toBeInTheDocument();
    expect(screen.getByText(/Gwenborough/i)).toBeInTheDocument();
  });
});
