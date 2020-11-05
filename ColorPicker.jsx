import React from "react";

export default ({
  onChange,
  value
}) => <input
  value={value}
  onInput={e => onChange(e.target.value)}
  type="color"
/>
