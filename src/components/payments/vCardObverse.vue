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
          :value="cardMonth"
          :width="70"
          @select="changeMonth"
        />
        <v-card-date-input
          :list="getAllYears()"
          :value="cardYear"
          :width="85"
          @select="changeYear"
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
import { isNumber } from "../../helpers";
import { mapMutations, mapState } from "vuex";

export default {
  name: "vCardObverse",
  computed: {
    ...mapState({
      cardMonth: state => state.cardMonth,
      cardYear: state => state.cardYear
    })
  },
  components: {
    "v-card-number-input": vCardNumberInput,
    "v-card-date-input": vCardDateInput,
    "v-card-holder-input": vCardHolderInput
  },
  methods: {
    ...mapMutations(["CHANGE_CARD_MONTH", "CHANGE_CARD_YEAR"]),

    getAllMonths() {
      return Array.from(new Array(12), (x, i) => (i + 1).toString());
    },
    getAllYears() {
      const now = new Date();
      return Array.from(new Array(50), (x, i) => (i + now.getFullYear()).toString());
    },
    changeMonth(value) {
      if (isNumber(value) && value >= 1 && value <= 12)
        this.CHANGE_CARD_MONTH(value);
    },
    changeYear(value) {
      if (isNumber(value) && value.length === 4) 
        this.CHANGE_CARD_YEAR(value);
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

  @media (max-width: 480px) {
    max-width: 350px;
    width: 100%;
    padding: 15px;
  }
}
</style>
