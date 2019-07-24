<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/nav/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
  @import "./styles/_variables.scss";
#app {
  font-family: $Lato;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #fbfbfb;
}
.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}
</style>
