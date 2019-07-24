<template>
  <router-link
    :to="to"
    :class="['base-button_' + type, {'is_inactive': isInactive}]"
    tag="button"
    class="base-button-back"
  >
    <slot/>
  </router-link>
</template>
<script>
export default {
  name: "BaseButtonBack",
  props: {
    to: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "secondary"
    },
    isInactive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button-back {
  font-size: 14px;
  line-height: 20px;
  font-family: Lato, sans-serif;
  color: #4b74ff;
  font-weight: 700;
  white-space: nowrap;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: darken(#4b74ff, 30%);
  }
  &.is_inactive {
    color: green;
    cursor: default;
    pointer-events: none;
  }
}
</style>