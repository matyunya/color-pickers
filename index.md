# Svelte, React and Vue color pickers

These are three nearly identical color pickers implemented with Ellx in three different JavaScript frameworks. They don't do much, just a tiny wrapper around input type `color`.

## Demo

| { logoSvelte({ value: val1 }) } | { logoReact({ value: val2 }) } | { logoVue({ value: val3 }) } |
|--------|-------|-----|
| { val1 = colorPickerSvelte({ value: "#ff3e00" }) } | { val2 = colorPickerReact({ value: "#61dafb" }) } | { val3 = colorPickerVue({ value: "#42b983"}) } |
| { val1 } | { val2 } | { val3 } |


## Source code

<div id="code" class="flex flex-row">

<div class="w-1/3">

```
// ColorPicker.svelte
<script>
  export let value;
</script>

<input
  bind:value
  type="color"
>



```

</div>

<div class="w-1/3">

```
// ColorPicker.jsx
import React from "react";

export default ({
  onChange,
  value
}) => <input
  value={value}
  onInput={e => onChange(e.target.value)}
  type="color"
/>

```

</div>

<div class="w-1/3">

```
// ColorPicker.vue
<template>
  <input
    v-model="value"
    type="color"
  >
</template>
<script>
  export default {
    props: ["value"]
  }
</script>
```
</div>

<style>
  table {
    margin: 2rem auto;
    font-family: monospace;
    font-size: 18px;
  }

  #code pre {
    font-size: 12px;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex {
    display: flex;
  }
  .w-1/3 {
    width: 33.333333%;
  }
</style>

</div>

## How is this even possible?

Obviously, this is not rocket science, yet Ellx simplifies the task of running whatever JavaScript at hand. By introducing (yet another) component API which allows for something like

```
{ value = myReactComponent() }
{ mySvelteComponent(value) }
```

By default Ellx provides basic wrappers around [React](/ellx-hub/lib/utils/react.js), [Svelte]((/ellx-hub/lib/utils/svelte.js)) and [Vue](/ellx-hub/lib/utils/vue.js) in our [standard library](/ellx-hub/lib/). All of them bind to `value` prop, so in becomes the output of the component on the graph, which may not be the desired behavior but it's just an example of how to write Ellx wrappers.

Here's the rest of the code:
```
// index.js
import svelte from "~ellx-hub/lib/utils/svelte";
import react from "~ellx-hub/lib/utils/react";
import vue from "~ellx-hub/lib/utils/vue";

import ColorPickerSvelte from "/ColorPicker.svelte";
import ColorPickerVue from "/ColorPicker.vue";
import ColorPickerReact from "/ColorPicker.jsx";

export const colorPickerSvelte = svelte(ColorPickerSvelte);
export const colorPickerVue = vue(ColorPickerVue);
export const colorPickerReact = react(ColorPickerReact);

// index.md, the file you're viewing. Omitting the md table for clarity

{ val1 = colorPickerSvelte({ value: "#ff3e00" }) }
{ val2 = colorPickerReact({ value: "#61dafb" }) }
{ val3 = colorPickerVue({ value: "#42b983"}) }
```
