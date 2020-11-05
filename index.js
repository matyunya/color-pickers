import svelte from "~ellx-hub/lib/utils/svelte";
import react from "~ellx-hub/lib/utils/react";
import vue from "~ellx-hub/lib/utils/vue";

import ColorPickerSvelte from "/ColorPicker.svelte";
import ColorPickerVue from "/ColorPicker.vue";
import ColorPickerReact from "/ColorPicker.jsx";

import LogoSvelte from "/Logo.svelte";
import LogoVue from "/Logo.vue";
import LogoReact from "/Logo.jsx";

export const colorPickerSvelte = svelte(ColorPickerSvelte);
export const colorPickerVue = vue(ColorPickerVue);
export const colorPickerReact = react(ColorPickerReact);

export const logoSvelte = svelte(LogoSvelte);
export const logoVue = vue(LogoVue);
export const logoReact = react(LogoReact);
