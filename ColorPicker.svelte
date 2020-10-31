<script>
  export let value;

  const change = e => (value = e.target.value);
</script>

<input
  on:change={change}
  type="color"
>
