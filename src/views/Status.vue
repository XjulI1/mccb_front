<template>
  <div class="status">
    <img src="../assets/logo.png" id="logo" alt="mccb_logo">

    <h1>{{ msg }}</h1>
    <hr>
    <div class="middleware_status">
      <b>
        Middleware status : {{ middleware_status }}
      </b>
      <br>
      <b>
        API status : {{ api_status }}
      </b>
    </div>
  </div>
</template>

<script>
  import config from '@/config'
  import axios from 'axios'

  export default {
    name: 'status',
    data () {
      return {
        msg: 'Servers status',
        middleware_status: '',
        api_status: ''
      }
    },

    created () {
      this.getMiddlewareStatus()
      this.getAPIStatus()
    },

    methods: {
      getMiddlewareStatus () {
        axios.get(`${config.API_URL}/ping`).then((response) => {
          this.middleware_status = response.status
        }).catch((response) => {
          this.middleware_status = response.status
        })
      },
      getAPIStatus () {
        axios.get(`${config.BACK_URL}`).then((response) => {
          this.api_status = response.status
        }).catch((response) => {
          this.api_status = response.status
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  hr {
    width: 40%;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .middleware_status {
    padding-top: 10px;
    font-size: 1.3em;
  }

  .status {
    text-align: center;
  }

  #logo {
    max-width: 200px;
  }
</style>
