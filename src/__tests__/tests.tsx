import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render } from "../utils/test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import WS from "jest-websocket-mock";

import App from "../App";
import Profile from "../containers/Profile";
import Home from "../containers/Home";
import {
  serverResponseSubscribed1,
  serverResponseSubscribed2,
  serverResponseSubscribed3,
  serverResponseSubscribed4,
  serverResponseSubscribed5,
  serverResponseData1,
  serverResponseData2,
  serverResponseData3,
  serverResponseData4,
  serverResponseData5,
} from "../utils/fakeResponse";

const server = new WS("wss://api-pub.bitfinex.com/ws/2");

describe("Auth works properly", () => {
  test("User clicks LOGIN button => LOGIN button disappears, PROFILE appears", () => {
    const { getByRole, getByText } = render(<App />);

    const loginBtn = getByRole("button", { name: /login/i });
    userEvent.click(loginBtn);

    const profile = getByText(/profile/i);

    expect(loginBtn).not.toBeInTheDocument();
    expect(profile).toBeInTheDocument();
  });
});

describe("Profile toggler", () => {
  test("When PROFILE page appears, user can see image and button for toggling => clicking on toggle btn, image changes alternately", () => {
    const history = createMemoryHistory();
    const route = "/profile";
    history.push(route);
    const { getByRole } = render(
      <Router history={history}>
        <Profile />
      </Router>
    );

    const image = getByRole("img");
    expect(image).toBeInTheDocument();

    const img1 = "profile.jpg";
    const img2 =
      "https://api.hello-avatar.com/adorables/285/strbac.jelena.js@gmail.com";

    const toggleBtn = getByRole("button", { name: /toggle avatar/i });
    expect(toggleBtn).toBeInTheDocument();

    expect(image).toHaveAttribute("src", img1);
    userEvent.click(toggleBtn);
    expect(image).toHaveAttribute("src", img2);
    userEvent.click(toggleBtn);
    expect(image).toHaveAttribute("src", img1);
  });
});

describe("Crypto data shown on home page", () => {
  test("After successful connection to WS => spinner is shown when server responds about subscription and currencies are shown in table after server responds all data for every currency", async () => {
    const { getByText, getByTestId } = render(<Home />);

    await server.connected;

    const serverResponseInfo = JSON.stringify({
      event: "info",
      version: 2,
      serverId: "6fe47ec5-71e6-4bf3-876c-3df6af1fb1b6",
      platform: {
        status: 1,
      },
    });

    server.send(serverResponseInfo);

    const spinner = getByTestId("spinner");
    expect(spinner).toBeInTheDocument();

    server.send(serverResponseSubscribed1);
    server.send(serverResponseSubscribed2);
    server.send(serverResponseSubscribed3);
    server.send(serverResponseSubscribed4);
    server.send(serverResponseSubscribed5);
    expect(spinner).toBeInTheDocument();

    server.send(serverResponseData1);
    server.send(serverResponseData2);
    server.send(serverResponseData3);
    server.send(serverResponseData4);
    server.send(serverResponseData5);

    const btc = getByText("BTCUSD");
    expect(btc).toBeInTheDocument();
  });
});
