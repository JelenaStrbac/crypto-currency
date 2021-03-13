// test-utils.js
import { FC, ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";

function render(ui: ReactElement) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
