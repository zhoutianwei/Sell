<template>
    <div>

      <nav class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand">Dark</a>
        <div>
        <small class="text-white" v-if="IsLoggedIn">{{CurrentUser}}</small>
        <button class="btn btn-secondary" v-if="IsLoggedIn" @click="logout">lot out</button>
        </div>
<!--        <div>-->
<!--        <router-link to="/login">-->
<!--        <button type="button" class="btn btn-success" v-if="!isLoggedIn">登録</button>-->
<!--        </router-link>-->
<!--        <router-link to="/register">-->
<!--        <div class="btn btn-outline-primary" v-if="!isLoggedIn">新規</div>-->
<!--        </router-link>-->
<!--        </div>-->
      </nav>

    </div>
</template>

<script >
import firebase from 'firebase'

export default {
    name: 'home-Header',
    props: {
      CurrentUser: String,
      IsLoggedIn: Boolean
    },
    methods: {
        logout () {
          firebase.auth().signOut().then(() => {
            this.$router.push('/login')
          })
        }
    }
  }
</script>

<style scoped src="../../../../static/css/bootstrap.min.css">

</style>
