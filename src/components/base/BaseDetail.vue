<template>
  <div class="base-detail">
    <div v-if="subtitle" class="base-detail__subtitle">{{ subtitle }}</div>
    <div v-if="title" class="base-detail__title">{{ title }}</div>
    <slot/>
  </div>
</template>
<script>

export default {
  name: "BaseDetail",
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
.base-detail {
  &__subtitle {
    font-size: 12px;
    font-family: $Lato;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 18px;
    letter-spacing: normal;
    color: #333333;
  }
  &__title {
    font-size: 14px;
    font-family: $Lato;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #333333;
  }
}
</style>