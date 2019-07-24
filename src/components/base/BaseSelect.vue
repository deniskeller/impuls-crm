<template>
  <div class="select-content">
    <label v-if="label" for="base-input__input" class="base-select__label">
      {{ label }}
      <span v-if="star" class="base-select__required-star">*</span>
    </label>
    <div
    :class="['base-select_' + type]"
    class="base-select"
    @click="show = !show; showList()">
    
    <input
      :name="name"
      :value="value"
      type="hidden"
      class="base-input__input"
    >

    <div
      v-if="!value"
      :class="{ 'is_error': isError }"
      class="base-select__input"
    >
      <slot/>
    </div>

    <div
      v-else-if="value"
      :class="{ 'is_error': isError }"
      class="base-select__input"
    >
      <BaseCurrency
        :title="value" />
    </div>
    <svg
      class="base-select__icon base-select__icon_left"
      viewBox="0 0 8 6">
      <path d="M0.9375 0.71875L4 3.78125L7.0625 0.71875L8 1.65625L4 5.65625L0 1.65625L0.9375 0.71875Z"/>
    </svg>
    
    <svg
      class="base-select__icon base-select__icon_right"
      viewBox="0 0 12 6">
      <path d="M0.984375 0.984375H11.0156L6 6L0.984375 0.984375Z"/>
    </svg>

    <transition name="base-select-fade">
      <div
        v-if="show"
        class="base-select-list base-select__list">
        <template>
          <div
            v-for="(item, index) in list"
            :key="index"
            class="base-select-list__item"
            @click="setData(item)">
            <BaseCurrency
              v-if="currencies"
              :title="item"
            />

            <div
              v-if="listSecond"
              class="base-select-list__second">
              {{ listSecond[index] }}
            </div>
            
            <template
              v-else-if="!currencies">
              {{ item }}
            </template>
          </div>
        </template>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    list: {
      type: Array,
      default: null
    },
    listSecond: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: Boolean,
      default: false
    },
    star: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    currencies: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      value: null
    };
  },
  methods: {
    keyUp(e) {
      if (e.keyCode == 27) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
      }
    },
    showList() {
      document.addEventListener('click', this.hideList);
      document.addEventListener('keyup', this.keyUp);
    },
    hideList(e) {
      if (e.target !== this.$el) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
      }
    },
    setData(item) {
      //this.$emit('input', { name: this.name, value: this.value });
      this.value = item;
      this.$emit('input', this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-content {
  display: inline-block;
  width: 100%;
}
label {
  font-size: 14px;
  line-height: 25px;
  font-weight: 700;
  color: #333;
}

.base-select {
  $this: &;
  $size: 16px;

  position: relative;
  display: block;
  cursor: pointer;

  &__input {
    font-size: 14px;
    width: 100%;
    height: 32px;
    border-radius: 2px;
    border: solid 1px #c6cbd4;
    padding: 5px 12px;
    background-color: #ffffff;
    pointer-events: none;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.is_error {
      border-color: $red;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: fill $speed;
    display: none;

    &_left {
      width: em(8px);
      right: 12px;
    }

    &_right {
      right: em(18px);
      width: em(12px);
    }
  }

  &__list {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    top: 0;
    z-index: 2;
  }

  &_default {
    #{$this}__input {
      height: 32px;
    }
    #{$this}__icon_left {
      display: block;
      fill: $black;
    }
  }

  // &_header-money {
  //   #{$this}__input {
  //     color: $white;
  //     height: em(40px);
  //     padding: 0 em(15px, $size) 0 em(30px, $size);
  //     background-color: rgba(255, 255, 255, 0.2);
  //     transition: background-color $speed, color $speed;
  //   }
  //   #{$this}__icon_left {
  //     display: block;
  //     fill: $white;
  //   }
  //   &:hover {
  //     #{$this}__input {
  //       color: $black;
  //       background-color: rgba(255, 255, 255, 1);
  //     }
  //     #{$this}__icon_left {
  //       fill: $blue;
  //     }
  //   }
  // }

  // &_money {
  //   #{$this}__input {
  //     height: em(40px);
  //     padding: 0 em(15px, $size) 0 em(35px, $size);
  //     border-radius: em(6px);
  //     box-shadow: 0 2px 1px $grey;
  //   }
  //   #{$this}__icon_left {
  //     display: block;
  //     fill: $grey;
  //   }
  //   &:hover {
  //     #{$this}__icon_left {
  //       fill: $blue;
  //     }
  //   }
  // }

  // &_form {
  //   #{$this}__input {
  //     border: 2px solid $grey;
  //     height: em(48px);
  //     padding: 0 em(60px, $size) 0 em(24px, $size);
  //   }
  //   #{$this}__icon_right {
  //     display: block;
  //     fill: $grey;
  //   }
  //   &:hover {
  //     #{$this}__icon_right {
  //       fill: $blue;
  //     }
  //   }
  // }
}
.base-select-list {
  background-color: $white;
  border-radius: em(6px);
  box-shadow: 0 em(2px) em(30px) $grey;

  &__item {
    padding: 0 em(26px);
    height: em(48px);
    transition: background-color $speed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    &:hover {
      background-color: $light-blue;
    }
  }

  &__second {
    text-align: right;
  }
}
.base-select-fade-enter-active,
.base-select-fade-leave-active {
  transition-property: max-height;
  transition-timing-function: ease-in;
  transition-duration: $speed;
  max-height: em(200px);
}
.base-select-fade-enter,
.base-select-fade-leave-to {
  max-height: 100%;
}

.base-select-fade-leave-to {
  transition-duration: 0.1s;
  z-index: 1;
}
</style>
