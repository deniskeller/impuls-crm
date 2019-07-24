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
  name: "BaseButton2",
  props: {
    to: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
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
  line-height: 28px;
  font-weight: 600;
  font-family: $Roboto;
  color: #333;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  min-width: 66px;
  height: 26px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  &.is_inactive {
    color: green;
    cursor: default;
    pointer-events: none;
  }
  &_default {
    color: #333;
    line-height: 26px;
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
  &_payment {
    background: #7ed321;
    &:hover {
      background-color: darken(#7ed321, 10%);
      color: #fff;
    }
    &:active {
      background-color: darken(#7ed321, 30%);
      color: #fff;
    }
  }
  &_primary {
    background: #4b74ff;
    &:hover {
      background-color: darken(#4b74ff, 10%);
      color: #fff;
    }
    &:active {
      background-color: darken(#4b74ff, 30%);
      color: #fff;
    }
  }
  &_reminder {
    background: #e99e86;
    &:hover {
      background-color: darken(#e99e86, 10%);
      color: #fff;
    }
    &:active {
      background-color: darken(#e99e86, 30%);
      color: #fff;
    }
  }
  &_comment {
    background: #c6cbd4;
    &:hover {
      background-color: darken(#c6cbd4, 10%);
      color: #fff;
    }
    &:active {
      background-color: darken(#c6cbd4, 30%);
      color: #fff;
    }
  }
}
</style>