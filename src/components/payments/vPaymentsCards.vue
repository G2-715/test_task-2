<template>
  <div class="payments-cards">
    <h1 class="payments-cards__headline">Данные банковской карты</h1>

    <div class="payments-cards__card-wrapper">
      <v-card-obverse />
      <v-card-reverse />
    </div>
  </div>
</template>

<script>
import vCardObverse from "./vCardObverse";
import vCardReverse from "./vCardReverse";

export default {
  name: "vPaymentsCards",
  components: {
    "v-card-obverse": vCardObverse,
    "v-card-reverse": vCardReverse
  }
};
</script>

<style lang="scss" scoped>
.payments-cards {
  margin-bottom: 20px;
  
  &__headline {
    margin: 0;
    margin-bottom: 20px;
    color: #383d43;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 700;
    line-height: 25.45px;
  }

  &__card-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }
}
</style>
