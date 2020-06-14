<template>

<div>

  <div class="signin">

    <h2>Log in</h2>

    <div class="form-control">
    <form>
    <p>メールアドレス</p>
    <input type="text" placeholder="Username" v-model="username">
    <p>パスワード</p>
    <input type="password" placeholder="Password" v-model="password">
    <br>
    <button @click="Login">Log in</button>
    <p>You don't have an account?
      <router-link to="/accounts/signup">create account now!</router-link>
    </p>
    </form>

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
  h2
    font-size: 30px
    font-weight: bold
    margin-top: 8px
    text-align: center
  .form-control
    text-align: center
    margin-top: 5px
    height: 35px
    line-height: 35px
    input
      border: solid 1px black
  .img-control
    text-align: center

</style>
