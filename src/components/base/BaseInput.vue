<template>
  <div class="base-input">
    <label v-if="label" for="base-input__input" class="base-input__label">
      {{ label }}
      <span v-if="star" class="base-input__required-star">*</span>
    </label>
    <input
      :type="type"
      :name="name"
      :star="star"
      :placeholder="placeholder"
      :class="{ 'is_error': error }"
      :value="value"
      :label="label"
      class="base-input__input"
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="base-input__error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    star: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.base-input {
  position: relative;
  display: inline-block;
  label {
    font-size: 14px;
    line-height: 25px;
    font-weight: 700;
    color: #333;
  }
  &__input {
    font-size: 14px;
    width: 100%;
    height: 32px;
    border-radius: 2px;
    border: solid 1px #c6cbd4;
    background-color: #ffffff;
    padding: 5px 12px;
    outline: none;
    &.is_error {
      border-color: red;
    }
  }
  &__error {
    position: absolute;
    color: red;
    width: 200px;
    right: -230px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__label {
    position: relative;
    .base-input__required-star {
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
}
</style>
