import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";
import Dashboard from "../dashboard/Dashboard";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("should display strikes and balls title", () => {
    const { getByText } = render(<Display />);

    getByText(/balls/i);
    getByText(/strikes/i);
  });
  it("should display balls and strikes count on click", () => {
    const dashboard = render(<Dashboard />);
    const ballButton = dashboard.getByText(/ball/i);

    const display = render(<Display />);
    const ballCount = display.getByText(/balls/i);

    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent(1);
  });
});
