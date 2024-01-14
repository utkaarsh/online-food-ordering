import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromoted } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render Restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Wadeshwar");
  expect(name).toBeInTheDocument();
});

test("Should render the High Order Component which is pure veg", () => {
  const RestaurantCardPromoted = withPromoted(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  expect(MOCK_DATA).toHaveProperty("veg");
});
