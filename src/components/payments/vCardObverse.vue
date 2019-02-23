<template>
  <div class="card-obverse">
    <div class="card-obverse__card-number">
      <p class="card-obverse__keytext gray-text">Номер карты</p>
      <v-card-number-input />
    </div>
    <div class="card-obverse__card-date">
      <p class="card-obverse__keytext gray-text">Срок действия</p>
      <div class="card-obverse__date-wrapper">
        <v-card-date-input
          :list="getAllMonths()"
          :width="70"
        />
        <v-card-date-input
          :list="getAllYears()"
          :width="85"
        />
      </div>
    </div>
    <div class="card-obverse__card-holder">
      <v-card-holder-input />
    </div>
  </div>
</template>

<script>
import vCardNumberInput from "./vCardNumberInput";
import vCardDateInput from "./vCardDateInput";
import vCardHolderInput from "./vCardHolderInput";

export default {
  name: "vCardObverse",
  components: {
    "v-card-number-input": vCardNumberInput,
    "v-card-date-input": vCardDateInput,
    "v-card-holder-input": vCardHolderInput
  },
  methods: {
    getAllMonths() {
      return Array.from(new Array(12), (x, i) => i + 1);
    },
    getAllYears() {
      const now = new Date();
      return Array.from(new Array(50), (x, i) => i + now.getUTCFullYear());
    }
  }
};
</script>

<style lang="scss" scoped>
.card-obverse {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  padding: 25px 15px 15px 15px;
  border: 1px solid #e4e9ee;
  background-color: #f7f8f8;
  border-radius: 10px;
  z-index: 1;
  box-sizing: border-box;

  &__keytext {
    margin-bottom: 5px;
  }

  &__card-number {
    margin-bottom: 15px;
  }

  &__card-date {
    margin-bottom: 12px;
  }

  &__date-wrapper {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
