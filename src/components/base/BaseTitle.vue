<template>
  <h1 v-if="type === 'h1'" :class="['title_' + type]" class="title">
    <slot/>
  </h1>
  <h2 v-else-if="type === 'h2'" :class="['title_' + type]" class="title">
    <slot/>
  </h2>
  <h3 v-else-if="type === 'h3'" :class="['title_' + type]" class="title">
    <slot/>
  </h3>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    type: {
      type: String,
      default: "h1"
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  &_h1 {
    font-size: 32px;
  }
  &_h2 {
    font-size: 26px;
  }
  &_h3 {
    text-transform: uppercase;
    font-size: 14px;
  }
}
</style>
