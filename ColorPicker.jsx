import React from "react";

export default ({
  onChange,
  value
}) => <input
  defaultValue={value}
  onInput={e => onChange(e.target.value)}
  type="color"
/>
