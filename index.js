import svelte from "~ellx-hub/lib/utils/svelte";
import react from "~ellx-hub/lib/utils/react";
import vue from "~ellx-hub/lib/utils/vue";

import ColorPickerSvelte from "/ColorPicker.svelte";
import ColorPickerVue from "/ColorPicker.vue";
import ColorPickerReact from "/ColorPicker.jsx";


export const colorPickerSvelte = svelte(ColorPickerSvelte);
export const colorPickerVue = vue(ColorPickerVue);
export const colorPickerReact = react(ColorPickerReact);
