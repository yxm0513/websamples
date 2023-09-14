<script lang="ts">
  import { getBitcoinCurrentValue } from "./api/bitcoin-api";
  import { getTemperatureCurrentValue } from "./api/weather-api";
  import { onMount } from "svelte";

  let bitcoinCurrentValue = 0;
  let temperatureCurrentValue = 0;

  // Clear function is not called if onMount function is async
  // Ouch !
  // https://github.com/sveltejs/svelte/issues/4927
  // something like:
  //   onMount(async () => {
  //  bitcoinCurrentValue = await getBitcoinCurrentValue();
  // (...)
  // Will cause the return destroy function not to be called :-@
  onMount(() => {
    getTemperatureCurrentValue().then((value) => {
      temperatureCurrentValue = value;
    });

    getBitcoinCurrentValue().then((value) => {
      bitcoinCurrentValue = value;
    });

    const bitCoinInterval = setInterval(async () => {
      getBitcoinCurrentValue().then((value) => {
        bitcoinCurrentValue = value;
      });
    }, 1000);

    const temperatureInterval = setInterval(async () => {
      getTemperatureCurrentValue().then((value) => {
        temperatureCurrentValue = value;
      });
    }, 5000);

    return () => {
      clearInterval(bitCoinInterval);
      clearInterval(temperatureInterval);
    };
  });
</script>

<h1>Life Cycle demo</h1>

<h2>🤑 Current BitCoin Value: {bitcoinCurrentValue}</h2>
<h2>🌡 Current Temperature: {temperatureCurrentValue}</h2>
