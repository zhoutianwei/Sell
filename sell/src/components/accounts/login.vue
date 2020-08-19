<template>

<div>

  <div class="signin">

    <div class="text-center">
      <img src="../../assets/logo.png">
    </div>

    <div class="h1 text-center">Log in</div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" id="text1" class="form-control" v-model="username">
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" id="passwd1" class="form-control" v-model="password">
    </div>
    <div class="form-group text-center">
      <b-button variant="success" @click="Login">Success</b-button>
    </div>

    <p>You don't have an account?
      <router-link to="/register">create account now!</router-link>
    </p>
    <p>
      <router-link to="/accounts/resetpwd">Forgot your password?</router-link>
    </p>
  </div>

  </div>


</div>

</template>

<script>

import firebase from 'firebase'

export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        Login: function () {
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
                user => {
                    alert('Success!')
                    this.$router.push('/')
                },
                err => {
                    alert(err.message)
                }
            )
        }
    }
}

</script>

<style lang="stylus" scoped>
  /*h2*/
  /*  font-size: 30px*/
  /*  font-weight: bold*/
  /*  margin-top: 8px*/
  /*  text-align: center*/
  /*.form-control*/
  /*  text-align: center*/
  /*  margin-top: 5px*/
  /*  height: 35px*/
  /*  line-height: 35px*/
  /*  input*/
  /*    border: solid 1px black*/
  /*.img-control*/
  /*  text-align: center*/

</style>
