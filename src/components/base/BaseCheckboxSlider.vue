<script>
export default {
  name: "BaseCheckboxSlider",
  props: {
    name: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: this.isActive
    };
  },
  computed: {
    value() {
      return this.active ? 1 : 0;
    }
  },
  watch: {
    isActive() {
      this.updateActive();
    }
  },
  mounted() {},
  methods: {
    updateActive() {
      this.active = this.isActive;
    },
    onClick() {
      this.active = !this.active;
      this.sendEvent();
    },
    sendEvent() {
      this.$emit('change', { name: this.name, value: this.value });
    }
  }
};
</script>

<template>
  <div
    :class="{is_active: active}"
    class="base-checkbox-slider"
    @mousedown.prevent="onClick"
    @touchstart.prevent="onClick"
  >
    <input
      ref="input"
      :value="value"
      :name="name" 
      type="text" 
      class="base-checkbox-slider__input"
    >
    <div class="base-checkbox-slider__check">
      <div
        :class="{is_active: active}"
        class="base-checkbox-slider__slider"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.base-checkbox-slider {
  position: relative;
  display: inline-block;
  user-select: none;
  width: 30px;
  height: 16px;
  background: $grey;
  border-radius: em(14px);
  transition: background $speed;
  cursor: pointer;

  &.is_active {
    background: $blue;
  }

  &__input {
    position: absolute;
    visibility: hidden;
    font-size: 0;
    width: 0;
    height: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  &__slider {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: $white;
    border-radius: 100%;
    margin: 1px;
    box-shadow: 0 em(2px) em(1px) rgba(0, 0, 0, 0.1);
    transition: transform $speed;
    &.is_active {
      transform: translateX(100%);
    }
  }
}
</style>
