import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DropDown from "../dropDown";

const options = [
  { name: "option 1", value: "option1" },
  { name: "option 2", value: "option2" },
  { name: "option 3", value: "option3" },
];

describe("DropDown", () => {
  it("should render same text passed into a label prop", () => {
    render(<DropDown label="optionsItems" options={options} />);

    const labelElement = screen.getByText(/optionsItems/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render same options length in the select list", () => {
    render(<DropDown label="optionsItems" options={options} />);

    const optionsElementLength = screen.getAllByTestId("list-item").length;
    expect(optionsElementLength).toBe(3);
  });

  it("should render the same name found in options array", () => {
    render(<DropDown label="optionsItems" options={options} />);

    const optionsElement = screen.getAllByTestId("list-item").map((el) => el);
    expect(optionsElement[0].innerHTML).toBe("option 1");
    expect(optionsElement[1].innerHTML).toBe("option 2");
    expect(optionsElement[2].innerHTML).toBe("option 3");
  });
});
