# Crypto currencies overview

> Simple web app presenting live price updates for some of the most popular crypto currencies 💲 BTCUSD, BTCEUR, ETHUSD, ETHEUR and EOSUSD.

## 🔌 How it is built?

- ReactJS (functional components, incl. React hooks);
- TypeScript;
- Redux (Toolkit);
- React-bootstrap;
- Testing with Jest and React Testing Library;
- Usage of Bitfinex WebSocket API.

## 📌 Usage

App has two pages:

- **Home page (public)**

  - Presents real-time crypto currency data updates:
    - Relative daily change (in %);
    - Volume;
    - Price of the last trade.
  - Note that app relies on Bitfinex Websocket API version 2.0 - Ticker endpoint which provides a high level overview of the state of the market [Bitfinex Ticker](https://docs.bitfinex.com/reference#ws-public-ticker);

- **Profile page (private)**
  - Simulation of login functionality w/o real user authentication (simple Boolean flag is used);
  - After clicking login button (available from Home page) user can see Profile page;
  - Profile page contains card with user image and basic data;
  - Image can be changed to another one when user clicks on the toggle button - other image is obtained from https://api.hello-avatar.com/adorables/285/%3cYOUR_EMAIL API.
