import React from "react";

export default ({ value, onChange }) => <input
  onChange={e => onChange(e.target.value)}
  type="color"
/>
