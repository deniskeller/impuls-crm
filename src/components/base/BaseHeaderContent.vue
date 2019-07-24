<template>
  <div class="base-header-content">
    <slot/>
  </div>
</template>
<script>
export default {
  name: "BaseHeaderContent"
};
</script>

<style lang="scss">
.base-header-content {
  width: 100%;
  border-bottom: solid 1px #c6cbd4;
  padding-bottom: 20px;
  padding-top: 30px;
}
</style>