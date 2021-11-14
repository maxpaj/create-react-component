import { render } from "@testing-library/react";
import { TemplateComponent } from "./index";

describe("TemplateComponent", () => {
  test("it should render without errors", () => {
    render(<TemplateComponent />);
  });
});
