<template>
  <input type="color" @change="(e) => value = e.target.value">
</template>

<script>
  export default {
    data() {
      return {
        value: ""
      }
    }
  }
</script>
