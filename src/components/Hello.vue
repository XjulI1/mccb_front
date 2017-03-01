<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="server_status">
      <b>
        Server status : {{ server_status }}
      </b>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Futur space for mCcB',
        server_status: '',
      };
    },

    created() {
      this.getServerStatus();
    },

    methods: {
      getServerStatus() {
        this.$http.get(`${window.BACK_URL}/ping`).then((response) => {
          this.server_status = response.status;
        }).catch((response) => {
          this.server_status = response.status;
        });
      },
    },
  };
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

  .server_status {
    font-size: 1.3em;
  }
</style>
