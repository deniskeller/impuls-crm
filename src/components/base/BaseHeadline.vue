<template>
  <div class="base-headline">
    <BaseTitle v-if="title" class="base-headline__title">{{ title }}</BaseTitle>
    <slot/>
  </div>
</template>
<script>
import BaseTitle from "@/components/base/BaseTitle.vue";
export default {
  name: "BaseHeadline",
  props: {
    title: {
      type: String,
      default: null
    }
  },
  components: {
    BaseTitle
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: left;
}
</style>