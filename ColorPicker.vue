<template>
  <input
    :value="value"
    type="color"
    @input="(e) => $emit('input', e.target.value)"
  />
</template>

<script>
  export default {
    props: ["value"],
  };
</script>
