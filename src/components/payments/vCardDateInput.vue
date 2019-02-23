<template>
  <div
    class="card-date-input"
    @click="openSelection"
    :style="{width: `${width}px`}"
  >
    <img
      class="card-date-input__arrow"
      src="../../assets/baseline-keyboard_arrow_down-24px.svg"
      alt="arrow"
    >
    <input
      class="card-date-input__value dark-text"
      :value="value | twoNumbers"
      @keydown.prevent="() => {}"
      @blur="selectItem(choosen)"
      v-focus="focused"
    >
    <ul
      class="card-date-input__list"
      v-show="focused"
    >
      <li
        class="card-date-input__list-item dark-text"
        v-for="item in list"
        :key="item"
        @mouseleave="changeChoosen(value)"
        @mouseover="changeChoosen(item)"
      >{{ item | twoNumbers }}</li>
    </ul>
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
      value: this.list.slice(0, 1),
      choosen: "1"
    };
  },
  methods: {
    closeSelection() {
      this.focused = false;
    },
    openSelection() {
      this.focused = true;
    },
    selectItem(value) {
      this.value = value;
      this.closeSelection();
    },
    changeChoosen(val) {
      this.choosen = val;
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
  display: flex;
  position: relative;
  background-color: #fff;
  text-align: center;
  margin-right: 9px;

  &__value {
    width: 100%;
    text-align: center;
    padding: 10px 30px 10px 15px;
    border: 1px solid #e4e9ee;
    outline: none;
    cursor: pointer;
    color: transparent;
    text-shadow: 0 0 0 black;

    &:focus {
      border: 1px solid #7bc1f7;
      box-shadow: 0px 0px 8px #7bc1f7;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  &__list {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    top: -1px;
    left: -1px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #e4e9ee;
    max-height: 150px;
    overflow-y: scroll;

    &-item {
      padding: 6px;
      transition: 0.1s;
      cursor: pointer;

      &:hover {
        background-color: #3498db;
        color: #ffffff;
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
  transform: translateY(-10px);
  visibility: none;
}
</style>
