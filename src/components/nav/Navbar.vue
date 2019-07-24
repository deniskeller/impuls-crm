<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-items-left">
          <div class="navbar-items-left__logo">CRM</div>
          <div class="navbar-items-left__navigation">
            <router-link to="/Dashboard/">Дешборд</router-link>
            <router-link to="/Clients/Clients">Клиенты</router-link>
            <router-link to="/Groups/Groups">Группы</router-link>
          </div>
        </div>

        <div class="navbar-items-right">
          <div class="navbar-items-right__user">Гус Хидинг</div>
          <div class="navbar-items-right__login">Выйти</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  width: 100%;
  background: #333333;

  .navbar-content {
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .navbar-items-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__logo {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        color: #000;
        margin-right: 32px;
      }
      &__navigation {
        a {
          text-decoration: none;
          opacity: 0.3;
          font-size: 14px;
          font-weight: 400;
          color: #fbfbfb;
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
          &.router-link-exact-active {
            font-family: Lato, sans-serif;
            font-weight: 700;
            color: #fff;
            opacity: 1;
            border-bottom: 6px solid #4b74ff;
            padding-bottom: 13px;
          }
        }
      }
    }
    .navbar-items-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__user {
        font-size: 14px;
        font-family: Lato, sans-serif;
        font-weight: 900;
        color: #fff;
        cursor: pointer;
        margin-right: 25px;
      }
      &__login {
        opacity: 0.3;
        font-size: 14px;
        font-weight: 400;
        color: #fbfbfb;
        cursor: pointer;
        &:hover {
          font-family: Lato, sans-serif;
          font-weight: 700;
          color: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>
