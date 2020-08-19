<template>
    <div>
      <div style="background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8));">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#">スマートイン</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            </ul>
          </div>
        </nav>
        <div style="padding: 10px;">
          <div class="avatar">
            <i class="fas fa-user-circle"></i>
            <font-awesome-icon icon="user-circle"></font-awesome-icon>
          </div>
          <div class="name">
            {{currentUser}}
          </div>
        </div>
      </div>

      <div class="boxContainer">
        <div class="box">
          <div class="box-icon"><font-awesome-icon  icon="receipt"/></div>
          <div class="box-name">クーポン</div>
        </div>
        <div class="box">
          <div class="box-icon"><font-awesome-icon icon="credit-card" /></div>
          <div class="box-name">カード</div>
        </div>
        <div class="box">
          <div class="box-icon"><font-awesome-icon icon="history"/></div>
          <div class="box-name">予約履歴</div>
        </div>
      </div>

      <div style="background: bisque; height: 5px;">
      </div>


      <div class="contentContainer">
        <div class="content">
          <div class="content-name">プロフィール編集</div>
          <div class="content-icon"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>

      <div class="contentContainer">
        <div class="content">
          <div class="content-name">お気に入り</div>
          <div class="content-icon"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>

      <div class="contentContainer">
        <div class="content">
          <div class="content-name">お支払い</div>
          <div class="content-icon"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>

      <div class="contentContainer">
        <div class="content">
          <div class="content-name">ヘルプ</div>
          <div class="content-icon"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>

      <div class="contentContainer">
        <div class="content">
          <div class="content-name">設定</div>
          <div class="content-icon"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>
      <bottnav></bottnav>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import bottnav from '../bottnav/bottnav'
    import firebase from 'firebase'
    export default {
        name: 'mypage',
        data () {
          return {
            isLoggedIn: false,
            currentUser: '-----'
          }
        },
        mounted () {
          const user = firebase.auth().currentUser
          if (user) {
            this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.email
          }
        },
        components: {
          bottnav
        }
    }
</script>

<style scoped>
  body,td,th {
    font-family: "Arial", "Microsoft YaHei",sans-serif;
  }
  .avatar {
    display: flex;
    justify-content: center;
    font-size: 50px;
  }
  .name {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .boxContainer {
    display: flex;
    justify-content: space-around;
    font-size: 0;
    padding: 10px 0;
  }
  .box {
    display: inline-block;
  }
  .box-icon {
    text-align: center;
    font-size: 20px;
  }
  .box-name {
    font-size: 15px;
    font-weight: bold;
  }
  .contentContainer {
    padding: 15px;
    font-size: 0;
    border-bottom: 1px darkgray solid ;

  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content-icon, .content-name {
    display: inline-block;
  }
  .content-name {
    font-size: 18px;
  }
  .content-icon {
    font-size: 18px;
  }




</style>
