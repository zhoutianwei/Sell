<template>
  <div>

    <div class="control">
    <button @click="logout">lot out</button>
      <a>Hello<font-awesome-icon icon="user-circle" class="user-icon"></font-awesome-icon>{{name}}</a>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'sussed.vue',
    data () {
      return {
        name: firebase.auth().currentUser.email
      }
    },
    methods: {
      logout () {
        firebase.auth().signOut().then(() => {
          this.$router.push('/')
        })
      }
    },
    mounted () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('login')
        } else {
          console.log('logout')
        }
      })
    }

}
</script>

<style scoped lang="stylus">

.control
  text-align: right

</style>
