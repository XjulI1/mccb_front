<template>
  <div class="route-other-the-content" @click="returnToHome">
    <div class="component-content">
      <h3 class="title">{{$route.name}}</h3>
      <component :is="componentName" v-bind="params"/>
    </div>
  </div>
</template>

<script>
  import OperationForm from './OperationForm'
  import Search from './Search'

  export default {
    name: 'RouteOverTheContent',

    components: { OperationForm, Search },

    props: ['componentName', 'params'],

    methods: {
      returnToHome (event) {
        if (event.srcElement.className === 'route-other-the-content') {
          this.$router.push('/')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  .route-other-the-content {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    position: fixed;
  }

  .title {
    text-align: center;
  }

  .component-content {
    margin: ($header-account-height + 5px) auto auto;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 1rem;
    border-radius: 4px;
  }
</style>
