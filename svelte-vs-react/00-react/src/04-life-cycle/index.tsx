import React from "react";
import { getBitcoinCurrentValue } from "./api/bitcoin-api";
import { getTemperatureCurrentValue } from "./api/weather-api";

export const LifeCycle = () => {
  const [bitcoinCurrentValue, setBitcoinCurrentValue] = React.useState(0);
  const [temperatureCurrentValue, setTemperatureCurrentValue] =
    React.useState(0);

  React.useEffect(() => {
    getTemperatureCurrentValue().then((value) => {
      setTemperatureCurrentValue(value);
    });

    const temperatureInterval = setInterval(async () => {
      getTemperatureCurrentValue().then((value) => {
        setTemperatureCurrentValue(value);
      });
    }, 5000);

    return () => {
      clearInterval(temperatureInterval);
    };
  }, []);

  React.useEffect(() => {
    getBitcoinCurrentValue().then((value) => {
      setBitcoinCurrentValue(value);
    });

    const bitCoinInterval = setInterval(async () => {
      getBitcoinCurrentValue().then((value) => {
        setBitcoinCurrentValue(value);
      });
    }, 1000);

    return () => {
      clearInterval(bitCoinInterval);
    };
  }, []);

  return (
    <>
      <h1>04 Life Cycle</h1>
      <h3>🤑 Current BitCoin Value: {bitcoinCurrentValue}</h3>
      <h3>🌡 Current Temperature: {temperatureCurrentValue}</h3>
    </>
  );
};
