<template>
  <div>

    <div class="border-1px container">

    <div class="row fixed-bottom bg-dark p-2">

      <div class="col-3">
        <router-link to="/" class="text-white text-center">
          <label  class="text-white"><font-awesome-icon icon="home"/><div><small>ホーム</small></div></label>
        </router-link>
      </div>

      <div class="col-3">
        <router-link to="/search" class="text-white text-center">
          <label  class="text-white"><font-awesome-icon icon="search"/><div><small>検索</small></div></label>
        </router-link>
      </div>

      <div class="col-3">
        <router-link to="/orderHistory" class="text-white text-center">
          <label  class="text-white"><font-awesome-icon icon="history"/><div><small>注文内容</small></div></label>
        </router-link>
      </div>

      <div class="col-3">
        <router-link to="/myPage" class="text-white text-center">
          <label  class="text-white"><font-awesome-icon icon="user"/><div><small>アカウント</small></div></label>
        </router-link>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'nav.vue'
    }
</script>

<style scoped src="../../../static/css/bootstrap.min.css">

</style>
