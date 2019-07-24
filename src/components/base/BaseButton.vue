<template>
  <router-link
    :to="to"
    :class="['base-button_' + type, {'is_inactive': isInactive}]"
    tag="button"
    class="base-button"
  >
    <slot/>
  </router-link>
</template>
<script>
export default {
  name: "BaseButton",
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
.base-button {
  font-size: 14px;
  color: #fff;
  box-sizing: border-box;
  border: none;
  border-radius: 50px;
  height: 32px;
  outline: none;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  &.is_inactive {
    color: green;
    cursor: default;
    pointer-events: none;
  }
  &_primary {
    background: #4b74ff;
    &:hover {
      background-color: darken(#4b74ff, 10%);
    }
    &:active {
      background-color: darken(#4b74ff, 30%);
    }
  }
  &_default {
    color: #4b74ff;
    background: none;
    border: 1px solid #4b74ff;
    &:hover {
      color: #fff;
      background-color: darken(#4b74ff, 10%);
    }
    &:active {
      color: #fff;
      background-color: darken(#4b74ff, 30%);
    }
  }
}
</style>