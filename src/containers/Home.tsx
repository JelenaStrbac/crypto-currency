import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { updateCrypto } from "../store/slices/cryptoSlice";
import { useAppDispatch } from "../store/store";
import { Currencies, RootState, ResponseTypes } from "../types";

const getDataForEachCurrency = (data: number[]) => {
  const dailyChange = data[5];
  const volume = data[6];
  const lastPrice = data[7];

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
        const currencyDetails = getDataForEachCurrency(data[1]);

        dispatch(updateCrypto({ currency, currencyDetails }));
      }
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return (
    <div style={{ padding: "4rem" }}>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Daily change</th>
            <th>Volume</th>
            <th>Last price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(crypto).map((el, i) => {
            const key = el as Currencies;
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el}</td>
                <td>{crypto[key]["dailyChange"]}</td>
                <td>{crypto[key]["volume"]}</td>
                <td>{crypto[key]["lastPrice"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
