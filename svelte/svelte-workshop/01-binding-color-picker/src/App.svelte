<script lang="ts">
  import ColorDisplay from "./components/color-picker/color-display.svelte";
  import type { ValueChangePayload } from "./components/color-picker/model";
  import ColorEditor from "./components/color-picker/color-editor.svelte";

  let red = 50;
  let blue = 200;
  let green = 10;

  const handleValueChanged = (eventInfo: Event<ValueChangePayload>) => {
    switch (eventInfo.detail.name) {
      case "Red":
        red = eventInfo.detail.value;
        break;
      case "Green":
        green = eventInfo.detail.value;
        break;
      case "Blue":
        blue = eventInfo.detail.value;
    }
  };
</script>

<main class="root">
  <div class="display">
    <ColorDisplay {red} {green} {blue} />
    R: {red}, G: {green}, B: {blue}
  </div>
  <ColorEditor {red} {green} {blue} on:valuechange={handleValueChanged} />
  {red}
  {green}
  {blue}
</main>

<style>
  .root {
    display: flex;
    gap: 50px;
  }

  .display {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: space-between;
  }
</style>
