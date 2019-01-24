<template>
  <span></span>
</template>

<script>
  export default {
    name: 'RecurrOperation',

    created () {
      this.$store.dispatch('fetchRecurrOperation')
    }
  }
</script>

<style scoped>

</style>
