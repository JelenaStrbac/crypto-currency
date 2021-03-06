import { useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { updateCrypto } from "../store/slices/cryptoSlice";
import { useAppDispatch } from "../store/store";
import { Currencies, RootState, ResponseTypes } from "../types";

const formatNumber = (num: number, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat("en-US", options).format(num);

const getDataForEachCurrency = (data: number[]) => {
  const dailyChange = formatNumber(data[5], {
    style: "percent",
    signDisplay: "always",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const volume = formatNumber(data[7], { maximumFractionDigits: 0 });
  const lastPrice = formatNumber(data[6], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return { dailyChange, volume, lastPrice };
};

const criptoSymbols: Currencies[] = [
  "BTCUSD",
  "BTCEUR",
  "ETHUSD",
  "ETHEUR",
  "EOSUSD",
];

const Home = () => {
  const dispatch = useAppDispatch();
  const { crypto } = useSelector((state: RootState) => state);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    const channelIds: { [key: number]: Currencies } = {};

    ws.onopen = () => {
      criptoSymbols.forEach((el) => {
        ws.send(
          JSON.stringify({
            event: "subscribe",
            channel: "ticker",
            symbol: `t${el}`,
          })
        );
      });
    };

    ws.onmessage = (msg) => {
      const data: ResponseTypes = JSON.parse(msg.data);

      if (!Array.isArray(data)) {
        channelIds[data.chanId] = data.pair;
      } else {
        const currency = channelIds[data[0]];

        // heart-beating -> if there is no activity in the channel for 15 seconds
        if (data[1] !== "hb") {
          const currencyDetails = getDataForEachCurrency(data[1]);

          dispatch(updateCrypto({ currency, currencyDetails }));
        }
      }
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  let renderHomeScreen = (
    <Spinner data-testid="spinner" animation="border" variant="primary" />
  );

  if (Object.values(Object.values(crypto)).every((el) => el !== null)) {
    renderHomeScreen = (
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>#</th>
            <th
              style={{
                width: "35%",
              }}
            >
              Symbol
            </th>
            <th style={{ width: "20%" }}>Daily change</th>
            <th style={{ width: "20%" }}>Volume</th>
            <th style={{ width: "20%" }}>Last price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(crypto).map((el, i) => {
            const key = el as Currencies;
            return (
              <tr key={i}>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  {i + 1}
                </td>
                <td>{el}</td>
                <td>{crypto[key]?.["dailyChange"]}</td>
                <td>{crypto[key]?.["volume"]}</td>
                <td>{crypto[key]?.["lastPrice"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return (
    <div
      className="pt-4 px-2 p-md-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderHomeScreen}
    </div>
  );
};

export default Home;
