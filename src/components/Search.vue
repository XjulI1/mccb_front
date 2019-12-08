<template>
  <div>
    <input id="search-input" type="text" class="form-control" placeholder="Search terms" v-model="searchTerms"/>
  </div>
</template>

<script>
  export default {
    name: 'Search',

    data () {
      return {
        searchTerms: ''
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
