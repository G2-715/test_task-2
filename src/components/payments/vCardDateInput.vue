<template>
  <div
    class="card-date-input"
    :style="{width: `${width}px`}"
  >
    <span
      class="card-date-input__value dark-text"
      @mousedown="focused = true"
    >{{ value | twoNumbers }}</span>
    <img
      class="card-date-input__arrow"
      src="../../assets/baseline-keyboard_arrow_down-24px.svg"
      alt="arrow"
      @mousedown="focused = true"
    >
    <transition name="fade">
      <ul
        class="card-date-input__list"
        v-show="focused"
        @mouseleave="focused = false"
      >
        <li
          class="card-date-input__list-item dark-text"
          v-for="(item, index) in list"
          :key="index"
          @click="selectItem(item)"
        >{{ item | twoNumbers }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vCardDateInput",
  props: {
    list: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      focused: false,
      value: this.list[0]
    };
  },
  methods: {
    selectItem(value) {
      this.value = value;
      this.focused = false;
    }
  },
  filters: {
    twoNumbers(number) {
      return number < 10 ? "0" + number : number;
    }
  },
  directives: {
    focus: {
      update(el, binding) {
        if (binding.value) el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-date-input {
  position: relative;
  padding: 9px 0px 9px 15px;
  border: 1px solid #e4e9ee;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-right: 9px;
  height: 41px;
  cursor: pointer;

  &__value {
    position: absolute;
    top: 0;
    left: 0;
    padding: 9px 0px 9px 15px;
    height: 100%;
    width: 100%;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
  }

  &__list {
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    top: -1px;
    left: -1px;
    list-style: none;
    max-height: 150px;
    overflow-y: scroll;
    border: 1px solid #e4e9ee;

    &-item {
      padding: 8px 15px;
      background-color: #fff;
      transition: all 0.1s;

      &:hover {
        color: #ffffff;
        background-color: #3498db;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
