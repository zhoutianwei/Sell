<template>
    <div>

        <div class="img-control">
        <img src="../../assets/logo.png">
        </div>

        <h1>Sign Up</h1>

        <div class="form-control">
          <form>
            <p>メールアドレス:</p>
            <p><input type="email" v-model="email"></p>
            <P>パスワード</P>
            <p><input type="password" v-model="password"></p>
            <button @click="signUp">登録</button>
          </form>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'signup',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    alert('Create account:' + this.email)
                    this.$router.push('/')
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }
}
</script>

<style scoped lang="stylus">
h1
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
