<template>
  <div class="login">
    <h5>
      Taper votre code d'accès :
    </h5>
    <br>
    <div class="buttons">
      <button v-for="value in buttonList" :key="value" :value="value" @click="addNumber">{{value}}</button>
    </div>
    <br>
    <div>
      <span class="maskCode" v-for="(c, i) in code" :key="c + i">*</span>
      <button class="cross" v-if="code.length > 0" @click="crossDelete">X</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '@/config'

  export default {
    name: 'Login',

    watch: {
      code (value) {
        if (value.length === 6) {
          axios.get(config.API_URL + '/api/login/checkCode?code=' + this.code)
            .then((response) => {
              if (response.data.results.code === '200') {
                this.$store.dispatch('fetchUserByID', response.data.results.userID)
                this.$cookies.set('userToken', response.data.results.userID)
                this.$router.push('/')
              }
            })
        }
      }
    },

    data () {
      return {
        buttonList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => {
          return 0.5 - Math.random()
        }),
        code: ''
      }
    },

    created () {
    },

    methods: {
      addNumber (event) {
        this.code += event.target.value
      },

      crossDelete () {
        this.code = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    text-align: center;
  }

  button {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    font-size: 2rem;
    width: 3.5rem;

    &.cross {
      font-size: 0.9rem;
      width: 1.8rem;
    }
  }
</style>
